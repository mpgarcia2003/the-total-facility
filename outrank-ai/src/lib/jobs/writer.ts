import { prisma } from '@/lib/prisma'
import { OpenAI } from 'openai'
import { generateImages } from '@/lib/ai/images'

const openai = new OpenAI({
  apiKey: process.env.OUTRANKAI_OPENAI_API_KEY
})

interface ArticleDraft {
  tenantId: string
  url: string
  html: string
  markdown: string
  metadata: {
    title: string
    slug: string
    primaryKeyword: string
    secondaryKeywords: string[]
    images: Array<{ src: string; alt: string }>
    links: {
      internal: string[]
      external: string[]
    }
    schema: any[]
    ctaVariants: string[]
    brandVoice: string
    lastUpdated: string
  }
}

interface CritiquePayload {
  scores: {
    seoFoundation: number
    semanticDepth: number
    eeat: number
    llmCitability: number
    technicalUx: number
    bonus: number
    overall: number
  }
  findings: Array<{
    pillar: string
    issue: string
    evidence: string
    severity: string
  }>
  patchPlan: Array<{
    id: string
    pillar: string
    type: string
    selector: string
    before: boolean
    content: string
    rationale: string
  }>
  promptsUsed: {
    evaluatorVersion: string
    rulesetHash: string
  }
}

const EVALUATOR_SYSTEM_PROMPT = `You are "EvaluatorGPT", an SEO/EEAT/LLM-citation auditor for a multi-tenant SaaS.
GOAL: Score the provided article and propose a minimal patch plan to reach ≥80 overall and ≥70 per pillar.
Output JSON (CritiquePayload): scores, findings[], patch_plan[], prompts_used.

Rules:
1) Prefer surgical edits with CSS-like selectors (insert/replace/append).
2) SEO: primary keyword in title<60c, H1, slug, first 100w; meta 140–160c; 3–5 internal; 2+ authoritative external; ToC present.
3) Semantic: facts/tables every 200–300w; ensure 5W1H per H2.
4) EEAT: author block, first-party data if present, transparent source attributions.
5) LLM: declarative, quote-ready facts with dates; add FAQ JSON-LD.
6) Technical/UX: last updated timestamp, canonical as needed, CTAs intro/mid/end.
7) Keep brand voice: \${brand_voice}. Do not rewrite stylistically unless required to meet criteria.
Return only valid JSON per CritiquePayload schema.`

const FIXER_SYSTEM_PROMPT = `You are "FixerGPT". Apply patch_plan operations to the provided HTML/metadata and return an updated ArticleDraft.
Preserve IDs/anchors/classes. Validate JSON-LD (@context). Keep diffs minimal.
Return JSON: {"html":"...","metadata":{...}} only.`

export async function generateArticle(
  tenantId: string,
  keyword: string,
  title: string,
  outline: string[]
): Promise<string> {
  try {
    // Create initial draft
    const draft = await createInitialDraft(tenantId, keyword, title, outline)
    
    // Save initial draft
    const draftRecord = await prisma.draft.create({
      data: {
        tenantId,
        status: 'generating',
        html: draft.html,
        markdown: draft.markdown,
        metadata: draft.metadata,
        scores: {},
        images: draft.metadata.images
      }
    })

    // Start critique loop
    let currentDraft = draft
    let iteration = 0
    const maxIterations = 5
    let overallScore = 0

    while (iteration < maxIterations && overallScore < 80) {
      // Evaluate draft
      const critique = await evaluateDraft(currentDraft)
      
      // Update scores in database
      await prisma.draft.update({
        where: { id: draftRecord.id },
        data: {
          scores: critique.scores
        }
      })

      overallScore = critique.scores.overall

      if (overallScore >= 80 && allPillarsPass(critique.scores)) {
        break
      }

      // Apply fixes
      currentDraft = await applyFixes(currentDraft, critique.patchPlan)
      iteration++
    }

    // Generate images for the article
    const images = await generateArticleImages(currentDraft)
    currentDraft.metadata.images = images

    // Final update
    await prisma.draft.update({
      where: { id: draftRecord.id },
      data: {
        status: 'ready',
        html: currentDraft.html,
        markdown: currentDraft.markdown,
        metadata: currentDraft.metadata,
        images: currentDraft.metadata.images,
        scores: { overall: overallScore }
      }
    })

    return draftRecord.id
  } catch (error) {
    console.error('Error generating article:', error)
    throw error
  }
}

async function createInitialDraft(
  tenantId: string,
  keyword: string,
  title: string,
  outline: string[]
): Promise<ArticleDraft> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      {
        role: 'system',
        content: `You are an expert SEO content writer. Create a comprehensive article that:
        - Is 1,800-2,200 words
        - Has 8-12 headings (H2/H3)
        - Includes a table of contents
        - Uses the primary keyword naturally 5-7 times
        - Includes 3-5 lists or tables
        - Has an FAQ section with 5 questions
        - Includes 3-6 image placeholders with descriptive alt text
        - Has CTAs in intro, middle, and end
        - Follows E-E-A-T principles
        Output as HTML with proper semantic markup.`
      },
      {
        role: 'user',
        content: `Create an article about "${keyword}" with the title "${title}".
        
        Outline:
        ${outline.join('\n')}
        
        Include proper HTML structure with all SEO elements.`
      }
    ],
    temperature: 0.7,
    max_tokens: 4000
  })

  const html = response.choices[0].message.content || ''
  
  // Parse HTML to extract metadata
  const metadata = extractArticleMetadata(html, keyword, title)

  return {
    tenantId,
    url: `preview://draft/${Date.now()}`,
    html,
    markdown: convertHtmlToMarkdown(html),
    metadata
  }
}

async function evaluateDraft(draft: ArticleDraft): Promise<CritiquePayload> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      {
        role: 'system',
        content: EVALUATOR_SYSTEM_PROMPT.replace('${brand_voice}', draft.metadata.brandVoice || 'professional')
      },
      {
        role: 'user',
        content: `Evaluate this article and provide a CritiquePayload:
        
        HTML: ${draft.html}
        
        Metadata: ${JSON.stringify(draft.metadata)}
        
        Return valid JSON only.`
      }
    ],
    temperature: 0.3,
    response_format: { type: 'json_object' }
  })

  return JSON.parse(response.choices[0].message.content || '{}')
}

async function applyFixes(draft: ArticleDraft, patchPlan: any[]): Promise<ArticleDraft> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      {
        role: 'system',
        content: FIXER_SYSTEM_PROMPT
      },
      {
        role: 'user',
        content: `Apply these patches to the article:
        
        Current HTML: ${draft.html}
        Current Metadata: ${JSON.stringify(draft.metadata)}
        
        Patches to apply: ${JSON.stringify(patchPlan)}
        
        Return updated ArticleDraft as JSON.`
      }
    ],
    temperature: 0.3,
    response_format: { type: 'json_object' }
  })

  const updated = JSON.parse(response.choices[0].message.content || '{}')
  
  return {
    ...draft,
    html: updated.html || draft.html,
    metadata: { ...draft.metadata, ...updated.metadata }
  }
}

function allPillarsPass(scores: any): boolean {
  return scores.seoFoundation >= 70 &&
         scores.semanticDepth >= 70 &&
         scores.eeat >= 70 &&
         scores.llmCitability >= 70 &&
         scores.technicalUx >= 70
}

async function generateArticleImages(draft: ArticleDraft): Promise<any[]> {
  const images = []
  const imagePlaceholders = draft.metadata.images || []

  for (const placeholder of imagePlaceholders.slice(0, 3)) {
    try {
      const imageUrl = await generateImages(placeholder.alt)
      images.push({
        src: imageUrl,
        alt: placeholder.alt
      })
    } catch (error) {
      console.error('Error generating image:', error)
      images.push(placeholder)
    }
  }

  return images
}

function extractArticleMetadata(html: string, keyword: string, title: string): any {
  // Extract metadata from HTML
  // This is a simplified version - you'd use cheerio for proper parsing
  return {
    title,
    slug: title.toLowerCase().replace(/\s+/g, '-').substring(0, 60),
    primaryKeyword: keyword,
    secondaryKeywords: [],
    images: [
      { src: '', alt: `${keyword} overview` },
      { src: '', alt: `${keyword} benefits` },
      { src: '', alt: `${keyword} implementation` }
    ],
    links: {
      internal: [],
      external: []
    },
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        keywords: keyword
      }
    ],
    ctaVariants: ['Learn More', 'Get Started', 'Contact Us'],
    brandVoice: 'professional',
    lastUpdated: new Date().toISOString()
  }
}

function convertHtmlToMarkdown(html: string): string {
  // Simplified HTML to Markdown conversion
  // In production, use a proper library like turndown
  return html
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<[^>]*>/g, '')
}
