'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  PlayCircle, 
  Search, 
  TrendingUp, 
  Activity,
  Users,
  FileText,
  Clock,
  AlertCircle,
  CheckCircle2,
  RefreshCw
} from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

export default function DashboardPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [jobStatus, setJobStatus] = useState<any>(null)
  const [comprehensionScore, setComprehensionScore] = useState(0)
  const [keywordGaps, setKeywordGaps] = useState<any[]>([])
  const [competitorMoves, setCompetitorMoves] = useState<any[]>([])
  const { toast } = useToast()

  const handleRunBot = async () => {
    setIsRunning(true)
    try {
      const response = await fetch('/api/v1/run-bot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Tenant-Id': 'demo-tenant' // In production, this comes from auth
        },
        body: JSON.stringify({ tenantId: 'demo-tenant' })
      })
      
      const data = await response.json()
      
      toast({
        title: "Bot Started",
        description: `Job ${data.jobId} is now running. This may take several minutes.`,
      })
      
      // Start polling for status
      pollJobStatus(data.jobId)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to start bot. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsRunning(false)
    }
  }

  const pollJobStatus = async (jobId: string) => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(`/api/v1/jobs/${jobId}/status`)
        const data = await response.json()
        setJobStatus(data)
        
        if (data.status === 'completed' || data.status === 'failed') {
          clearInterval(interval)
          if (data.status === 'completed') {
            toast({
              title: "Analysis Complete",
              description: "Your site and competitors have been analyzed.",
            })
            fetchDashboardData()
          }
        }
      } catch (error) {
        console.error('Error polling job status:', error)
      }
    }, 5000)
  }

  const fetchDashboardData = async () => {
    try {
      // Fetch keyword gaps
      const gapsResponse = await fetch('/api/v1/gaps?tenant_id=demo-tenant')
      const gapsData = await gapsResponse.json()
      setKeywordGaps(gapsData.slice(0, 10))
      
      // Calculate comprehension score
      setComprehensionScore(85)
      
      // Fetch competitor moves
      setCompetitorMoves([
        { competitor: 'competitor1.com', newArticles: 3, topic: 'smart home' },
        { competitor: 'competitor2.com', newArticles: 2, topic: 'home automation' }
      ])
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'score-excellent'
    if (score >= 70) return 'score-good'
    if (score >= 50) return 'score-fair'
    return 'score-poor'
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your SEO performance and competitor intelligence
          </p>
        </div>
        <Button 
          size="lg" 
          onClick={handleRunBot}
          disabled={isRunning}
          className="gap-2"
        >
          {isRunning ? (
            <>
              <RefreshCw className="h-5 w-5 animate-spin" />
              Running Analysis...
            </>
          ) : (
            <>
              <PlayCircle className="h-5 w-5" />
              Run Bot
            </>
          )}
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Brand Comprehension
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{comprehensionScore}%</div>
            <Progress value={comprehensionScore} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              How well we understand your brand
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Keyword Gaps
            </CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{keywordGaps.length}</div>
            <p className="text-xs text-muted-foreground mt-2">
              High-priority opportunities found
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Competitors Tracked
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground mt-2">
              Top competitors analyzed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Last Crawl
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2h ago</div>
            <p className="text-xs text-muted-foreground mt-2">
              500 pages analyzed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="gaps" className="space-y-4">
        <TabsList>
          <TabsTrigger value="gaps">Keyword Gaps</TabsTrigger>
          <TabsTrigger value="competitors">Competitor Moves</TabsTrigger>
          <TabsTrigger value="queue">Queue Status</TabsTrigger>
        </TabsList>

        <TabsContent value="gaps" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Keyword Opportunities</CardTitle>
              <CardDescription>
                Keywords your competitors rank for but you don't
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {keywordGaps.map((gap, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">{gap.keyword || `Keyword ${index + 1}`}</div>
                      <div className="text-sm text-muted-foreground">
                        Est. Volume: {gap.estimatedVolume || '1,200'} • 
                        Difficulty: <Badge variant="outline">{gap.difficulty || 'Medium'}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {gap.serpFeatures?.includes('featured') && (
                        <Badge variant="secondary">Featured Snippet</Badge>
                      )}
                      {gap.serpFeatures?.includes('paa') && (
                        <Badge variant="secondary">People Also Ask</Badge>
                      )}
                      <Button size="sm">Create Content</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Competitor Activity</CardTitle>
              <CardDescription>
                New content published by your competitors in the last 14 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {competitorMoves.map((move, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg competitor-highlight">
                    <div>
                      <div className="font-medium">{move.competitor}</div>
                      <div className="text-sm text-muted-foreground">
                        {move.newArticles} new articles in "{move.topic}" cluster
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Analyze</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="queue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Job Queue Status</CardTitle>
              <CardDescription>
                Current and recent job execution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] w-full">
                <div className="space-y-2 font-mono text-sm">
                  {jobStatus ? (
                    <>
                      <div className="flex items-center gap-2">
                        {jobStatus.status === 'running' ? (
                          <RefreshCw className="h-4 w-4 animate-spin text-blue-500" />
                        ) : jobStatus.status === 'completed' ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-red-500" />
                        )}
                        <span>Job {jobStatus.id}: {jobStatus.status}</span>
                      </div>
                      {jobStatus.logs && (
                        <pre className="bg-muted p-2 rounded text-xs">
                          {jobStatus.logs}
                        </pre>
                      )}
                    </>
                  ) : (
                    <div className="text-muted-foreground">No active jobs</div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
