export interface Category {
  score: number
  trend: string
  changePercentage: number
}

export interface CompanyRiskOverview {
  companyId: string
  companyName: string
  overallRiskScore: number
  trend: {
    direction: string
    percentage: number
  }
  lastUpdated: string
  categories: {
    environmental: Category
    social: Category
    governance: Category
  }
}

export interface RiskOverviewResponse extends CompanyRiskOverview {
  riskLevel: 'low' | 'medium' | 'high'
  lastUpdatedFormatted: string
} 