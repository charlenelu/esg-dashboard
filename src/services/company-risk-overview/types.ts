import { CompanyRiskOverview } from '@/types/company-risk-overview-type'

export interface RiskOverviewResponse extends CompanyRiskOverview {
  riskLevel: 'low' | 'medium' | 'high'
  lastUpdatedFormatted: string
} 