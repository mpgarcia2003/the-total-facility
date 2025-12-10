import { chromium } from 'playwright'
import { prisma } from '@/lib/prisma'
import { extractContent } from '@/lib/nlp/extractor'
import { generateEmbeddings } from '@/lib/ai/embeddings'
import { storeInVectorDB } from '@/lib/vector/qdrant'
import * as cheerio from 'cheerio'
import axios from 'axios'
import { URL } from 'url'

export async function startCrawlJob(jobId: string, tenantId: string, domain: string) {
  try {
    // Update job status to running
    await prisma.job.update({
      where: { id: jobId },
      data: { 
        status: 'running',
        startedAt: new Date()
      }
    })

    // Start with sitemap
    const sitemapUrls = await fetchSitemap(domain)
    
    // Launch browser for JS rendering
    const browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })

    const crawledPages = []
    const batchSize = parseInt(process.env.OUTRANKAI_CRAWL_BATCH_SIZE || '50')

    // Crawl pages in batches
    for (let i = 0; i < Math.min(sitemapUrls.length, batchSize); i++) {
      const url = sitemapUrls[i]
      
      try {
        const page = await browser.newPage()
        await page.goto(url, { waitUntil: 'networkidle' })
        
        // Get page content
        const html = await page.content()
        const title = await page.title()
        
        // Extract text content
        const $ = cheerio.load(html)
        const textContent = $('body').text()
        
        // Extract structured data
        const schemaData = extractSchemaData($)
        const metaData = extractMetaData($)
        
        // Store page in database
        const dbPage = await prisma.page.upsert({
          where: {
            tenantId_url: {
              tenantId,
              url
            }
          },
          update: {
            lastCrawledAt: new Date(),
            content: textContent,
            hasSchema: !!schemaData,
            metadata: {
              title,
              meta: metaData,
              schema: schemaData
            }
          },
          create: {
            tenantId,
            url,
            sourceType: 'own',
            lastCrawledAt: new Date(),
            content: textContent,
            hasSchema: !!schemaData,
            metadata: {
              title,
              meta: metaData,
              schema: schemaData
            }
          }
        })
        
        // Generate embeddings for content chunks
        const chunks = chunkContent(textContent)
        const embeddings = await generateEmbeddings(chunks)
        
        // Store in vector database
        await storeInVectorDB(tenantId, url, chunks, embeddings)
        
        crawledPages.push({
          url,
          title,
          hasSchema: !!schemaData,
          wordCount: textContent.split(' ').length
        })
        
        await page.close()
      } catch (error) {
        console.error(`Error crawling ${url}:`, error)
      }
    }

    await browser.close()

    // Update job as completed
    await prisma.job.update({
      where: { id: jobId },
      data: {
        status: 'completed',
        finishedAt: new Date(),
        stats: {
          pagesCrawled: crawledPages.length,
          pages: crawledPages
        }
      }
    })

    // Trigger next job in the DAG
    await startAnalysisJob(jobId, tenantId)

  } catch (error) {
    console.error('Crawl job error:', error)
    await prisma.job.update({
      where: { id: jobId },
      data: {
        status: 'failed',
        errorText: error.message,
        finishedAt: new Date()
      }
    })
  }
}

async function fetchSitemap(domain: string): Promise<string[]> {
  try {
    const sitemapUrl = `https://${domain}/sitemap.xml`
    const response = await axios.get(sitemapUrl)
    const $ = cheerio.load(response.data, { xmlMode: true })
    
    const urls: string[] = []
    $('url > loc').each((_, elem) => {
      urls.push($(elem).text())
    })
    
    return urls
  } catch (error) {
    console.error('Error fetching sitemap:', error)
    // Fallback to homepage
    return [`https://${domain}`]
  }
}

function extractSchemaData($: any): any {
  const schemaScripts = $('script[type="application/ld+json"]')
  const schemas: any[] = []
  
  schemaScripts.each((_, elem) => {
    try {
      const schema = JSON.parse($(elem).html())
      schemas.push(schema)
    } catch (error) {
      console.error('Error parsing schema:', error)
    }
  })
  
  return schemas.length > 0 ? schemas : null
}

function extractMetaData($: any): any {
  return {
    description: $('meta[name="description"]').attr('content'),
    keywords: $('meta[name="keywords"]').attr('content'),
    ogTitle: $('meta[property="og:title"]').attr('content'),
    ogDescription: $('meta[property="og:description"]').attr('content'),
    ogImage: $('meta[property="og:image"]').attr('content'),
    canonical: $('link[rel="canonical"]').attr('href')
  }
}

function chunkContent(text: string, chunkSize: number = 1200, overlap: number = 150): string[] {
  const words = text.split(' ')
  const chunks: string[] = []
  
  for (let i = 0; i < words.length; i += chunkSize - overlap) {
    const chunk = words.slice(i, i + chunkSize).join(' ')
    chunks.push(chunk)
  }
  
  return chunks
}

async function startAnalysisJob(previousJobId: string, tenantId: string) {
  // Create analysis job
  const job = await prisma.job.create({
    data: {
      tenantId,
      type: 'analyze_site',
      status: 'pending',
      stats: {
        previousJobId
      }
    }
  })
  
  // Queue the analysis job
  // This would be handled by your queue system (Bull, etc.)
  console.log(`Queued analysis job ${job.id} for tenant ${tenantId}`)
}
