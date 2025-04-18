import type { CompanyRiskOverview } from '@/types/company-risk-overview-type'

const API_BASE_URL = 'http://localhost:3000/api'

export async function fetchCompanyRiskOverview(companyId: string = 'demo-company-123'): Promise<CompanyRiskOverview> {
  try {
    const response = await fetch(`${API_BASE_URL}/company-risk-overview?companyId=${companyId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch company risk overview')
    }
    return response.json()
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch company risk overview data')
  }
} 