import riskScoreHistoryData from '../origin-data/risk-score-history.json'

export interface RiskScoreHistoryData {
  date: string
  overall: number
  environmental: number
  social: number
  governance: number
}

export interface RiskScoreHistoryResponse {
  data: RiskScoreHistoryData[]
  interval: string
}

export async function getRiskScoreHistory(): Promise<RiskScoreHistoryResponse> {
  // 模拟 API 延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return {
    data: riskScoreHistoryData.data,
    interval: riskScoreHistoryData.interval
  }
} 

// export const getRiskScoreHistory = async () => {
//     const response = await import('../origin-data/risk-score-history.json');
//     return response;
// };