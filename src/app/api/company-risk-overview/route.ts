import { NextResponse } from 'next/server'
import { companyRiskOverviewService } from '@/services/company-risk-overview/companyRiskOverviewService'

// GET /api/company-risk-overview
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const companyId = searchParams.get('companyId')

    if (!companyId) {
      return NextResponse.json(
        { error: 'Company ID is required' },
        { status: 400 }
      )
    }

    const data = await companyRiskOverviewService.getRiskOverview(companyId)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching company risk overview:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
