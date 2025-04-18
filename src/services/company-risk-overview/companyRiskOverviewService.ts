import { companyRiskOverviewRepository } from '@/repositories/company-risk-overview/companyRiskOverviewRepository'
import { RiskOverviewResponse } from './types'
import { format } from 'date-fns'
import { CompanyRiskOverview } from '@/types/company-risk-overview-type'

export class CompanyRiskOverviewService {
  async getRiskOverview(companyId: string): Promise<RiskOverviewResponse> {
    try {
      const data = await companyRiskOverviewRepository.findById(companyId)
      
      if (!data) {
        throw new Error('Company risk data not found')
      }

      return this.formatRiskData(data)
    } catch (error) {
      console.error('Error in CompanyRiskOverviewService.getRiskOverview:', error)
      throw error
    }
  }

  async getAllRiskOverviews(): Promise<RiskOverviewResponse[]> {
    try {
      const data = await companyRiskOverviewRepository.findAll()
      return data.map((item: CompanyRiskOverview) => this.formatRiskData(item))
    } catch (error) {
      console.error('Error in CompanyRiskOverviewService.getAllRiskOverviews:', error)
      throw error
    }
  }

  private formatRiskData(data: CompanyRiskOverview): RiskOverviewResponse {
    return {
      ...data,
      riskLevel: this.calculateRiskLevel(data.overallRiskScore),
      lastUpdatedFormatted: format(new Date(data.lastUpdated), 'yyyy-MM-dd HH:mm:ss')
    }
  }

  private calculateRiskLevel(score: number): 'low' | 'medium' | 'high' {
    if (score < 40) return 'low'
    if (score < 70) return 'medium'
    return 'high'
  }
}

export const companyRiskOverviewService = new CompanyRiskOverviewService() 