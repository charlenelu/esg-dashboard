import { fetchRiskScoreHistory } from '@/services/risk-score-history/riskScoreHistoryService'
import RiskScoreHistoryClient from '@/components/risk-score-history/RiskScoreHistoryClient'

export default async function RiskScoreHistoryServer() {
  const data = await fetchRiskScoreHistory()
  
  return <RiskScoreHistoryClient data={data} />
} 