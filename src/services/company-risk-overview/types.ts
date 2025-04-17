import { CompanyRiskOverview } from '@/types/company-risk-overview'

export interface RiskOverviewResponse extends CompanyRiskOverview {
  riskLevel: 'low' | 'medium' | 'high'
  lastUpdatedFormatted: string
} 