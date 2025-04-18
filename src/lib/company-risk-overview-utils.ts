import type { CompanyRiskOverview } from '@/types/company-risk-overview-type'
import { companyRiskOverviewService } from '@/services/company-risk-overview/companyRiskOverviewService'

const isServer = typeof window == 'undefined'
// const deployAPIURL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api` : ''
// const serverAPIURL = process.env.API_URL || deployAPIURL || 'http://localhost:3000/api'
const API_BASE_URL = '/api'

export async function fetchCompanyRiskOverview(companyId: string = 'demo-company-123'): Promise<CompanyRiskOverview> {
  try {
    if (isServer) {
      return await companyRiskOverviewService.getRiskOverview(companyId)
    }
    
    const response = await fetch(`${API_BASE_URL}/company-risk-overview?companyId=${companyId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch company risk overview')
    }
    return response.json()
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch company risk overview data')
  }
} 
