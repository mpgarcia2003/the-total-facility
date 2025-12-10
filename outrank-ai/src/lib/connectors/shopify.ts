import { shopifyApi, ApiVersion, Session } from '@shopify/shopify-api'
import { prisma } from '@/lib/prisma'

interface ShopifyArticle {
  title: string
  content: string
  author: string
  tags: string[]
  image?: {
    src: string
    alt: string
  }
  publishedAt?: string
  blogId?: string
}

class ShopifyConnector {
  private shopify: any
  private session: Session

  constructor(shop: string, accessToken: string) {
    this.shopify = shopifyApi({
      apiKey: process.env.SHOPIFY_API_KEY!,
      apiSecretKey: process.env.SHOPIFY_API_SECRET!,
      scopes: ['read_content', 'write_content'],
      hostName: process.env.SHOPIFY_APP_URL!,
      apiVersion: ApiVersion.October23,
    })

    this.session = new Session({
      id: `offline_${shop}`,
      shop,
      state: '',
      isOnline: false,
      accessToken,
    })
  }

  async publishArticle(draftId: string, article: ShopifyArticle): Promise<any> {
    try {
      const client = new this.shopify.clients.Graphql({ session: this.session })

      // Default to the first blog if not specified
      let blogId = article.blogId
      if (!blogId) {
        const blogs = await this.getBlogs()
        blogId = blogs[0]?.id
      }

      const mutation = `
        mutation createArticle($article: ArticleInput!) {
          articleCreate(article: $article) {
            article {
              id
              handle
              title
              publishedAt
              tags
              image {
                url
                altText
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `

      const variables = {
        article: {
          blogId,
          title: article.title,
          contentHtml: article.content,
          authorV2: article.author || 'OutrankAI',
          tags: article.tags,
          publishedAt: article.publishedAt || new Date().toISOString(),
          image: article.image ? {
            src: article.image.src,
            altText: article.image.alt
          } : undefined
        }
      }

      const response = await client.query({
        data: {
          query: mutation,
          variables
        }
      })

      if (response.body.data.articleCreate.userErrors.length > 0) {
        throw new Error(response.body.data.articleCreate.userErrors[0].message)
      }

      // Save publish event
      await prisma.publishEvent.create({
        data: {
          tenantId: await this.getTenantId(),
          draftId,
          provider: 'shopify',
          payload: variables,
          result: response.body.data.articleCreate.article
        }
      })

      return response.body.data.articleCreate.article
    } catch (error) {
      console.error('Error publishing to Shopify:', error)
      throw error
    }
  }

  async getBlogs(): Promise<any[]> {
    try {
      const client = new this.shopify.clients.Graphql({ session: this.session })

      const query = `
        query {
          blogs(first: 10) {
            edges {
              node {
                id
                title
                handle
              }
            }
          }
        }
      `

      const response = await client.query({
        data: { query }
      })

      return response.body.data.blogs.edges.map((edge: any) => edge.node)
    } catch (error) {
      console.error('Error fetching blogs:', error)
      throw error
    }
  }

  async updateArticle(articleId: string, updates: Partial<ShopifyArticle>): Promise<any> {
    try {
      const client = new this.shopify.clients.Graphql({ session: this.session })

      const mutation = `
        mutation updateArticle($id: ID!, $article: ArticleInput!) {
          articleUpdate(id: $id, article: $article) {
            article {
              id
              handle
              title
              publishedAt
            }
            userErrors {
              field
              message
            }
          }
        }
      `

      const variables = {
        id: articleId,
        article: {
          title: updates.title,
          contentHtml: updates.content,
          tags: updates.tags,
          publishedAt: updates.publishedAt
        }
      }

      const response = await client.query({
        data: {
          query: mutation,
          variables
        }
      })

      return response.body.data.articleUpdate.article
    } catch (error) {
      console.error('Error updating Shopify article:', error)
      throw error
    }
  }

  async deleteArticle(articleId: string): Promise<boolean> {
    try {
      const client = new this.shopify.clients.Graphql({ session: this.session })

      const mutation = `
        mutation deleteArticle($id: ID!) {
          articleDelete(id: $id) {
            deletedArticleId
            userErrors {
              field
              message
            }
          }
        }
      `

      const response = await client.query({
        data: {
          query: mutation,
          variables: { id: articleId }
        }
      })

      return !!response.body.data.articleDelete.deletedArticleId
    } catch (error) {
      console.error('Error deleting Shopify article:', error)
      throw error
    }
  }

  private async getTenantId(): Promise<string> {
    // In production, this would be determined from the session/context
    return 'demo-tenant'
  }
}

export async function publishToShopify(
  tenantId: string,
  draftId: string,
  blogId?: string,
  scheduledAt?: Date
): Promise<any> {
  try {
    // Get tenant's Shopify credentials
    const connection = await prisma.connection.findFirst({
      where: {
        tenantId,
        type: 'shopify'
      }
    })

    if (!connection) {
      throw new Error('Shopify connection not found for tenant')
    }

    const { shop, accessToken } = connection.meta as any

    // Get draft content
    const draft = await prisma.draft.findUnique({
      where: { id: draftId }
    })

    if (!draft) {
      throw new Error('Draft not found')
    }

    // Initialize Shopify connector
    const shopify = new ShopifyConnector(shop, accessToken)

    // Prepare article data
    const article: ShopifyArticle = {
      title: draft.metadata.title,
      content: draft.html,
      author: draft.metadata.author || 'OutrankAI',
      tags: [
        draft.metadata.primaryKeyword,
        ...draft.metadata.secondaryKeywords
      ],
      image: draft.metadata.images?.[0],
      blogId,
      publishedAt: scheduledAt?.toISOString()
    }

    // Publish to Shopify
    const result = await shopify.publishArticle(draftId, article)

    // Update draft status
    await prisma.draft.update({
      where: { id: draftId },
      data: {
        status: 'published',
        metadata: {
          ...draft.metadata,
          shopifyArticleId: result.id,
          shopifyHandle: result.handle,
          publishedAt: result.publishedAt
        }
      }
    })

    return result
  } catch (error) {
    console.error('Error in publishToShopify:', error)
    throw error
  }
}

export default ShopifyConnector
