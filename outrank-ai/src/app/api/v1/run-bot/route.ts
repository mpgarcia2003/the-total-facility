import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { startCrawlJob } from '@/lib/jobs/crawl'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const tenantId = body.tenantId || request.headers.get('X-Tenant-Id')

    if (!tenantId) {
      return NextResponse.json(
        { error: 'Tenant ID is required' },
        { status: 400 }
      )
    }

    // Verify tenant exists
    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId }
    })

    if (!tenant) {
      return NextResponse.json(
        { error: 'Tenant not found' },
        { status: 404 }
      )
    }

    // Create a new job
    const job = await prisma.job.create({
      data: {
        tenantId,
        type: 'full_analysis',
        status: 'pending',
        stats: {
          steps: [
            'crawl_site',
            'analyze_site',
            'competitors_discovery',
            'crawl_competitors',
            'analyze_competitors',
            'gap_planner'
          ]
        }
      }
    })

    // Start the crawl job asynchronously
    startCrawlJob(job.id, tenantId, tenant.domain)

    return NextResponse.json(
      { 
        jobId: job.id,
        status: 'accepted',
        message: 'Analysis started. This may take several minutes.'
      },
      { status: 202 }
    )
  } catch (error) {
    console.error('Error starting bot:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
