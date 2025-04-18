import { NextResponse } from 'next/server'
import { fetchRiskScoreHistory } from '@/services/risk-score-history/riskScoreHistoryService'

export async function GET() {
  try {
    const data = await fetchRiskScoreHistory()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch risk score history' },
      { status: 500 }
    )
  }
} 