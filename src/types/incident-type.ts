export interface RiskScoreImpact {
  overall: number
  environmental: number
  social: number
  governance: number
}

export interface Source {
  title: string
  url: string
  publishDate: string
}

export interface Incident {
  id: string
  title: string
  date: string
  category: string
  subcategory: string
  severity: string
  description: string
  detailedDescription?: string
  location: string
  riskScoreImpact: RiskScoreImpact
  sources?: Source[]
  status?: string
  impactScope?: string
} 