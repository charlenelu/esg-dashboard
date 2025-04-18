import { getRiskScoreHistory } from '@/repositories/risk-score-history/riskScoreHistoryRepository'
import { RiskScoreHistoryResponse } from '@/repositories/risk-score-history/riskScoreHistoryRepository'

export async function fetchRiskScoreHistory(): Promise<RiskScoreHistoryResponse> {
  try {
    const rawData = await getRiskScoreHistory()
    
    // 数据处理和转换
    const processedData = {
      ...rawData,
      data: rawData.data.map(item => ({
        ...item,
        // 可以在这里添加数据转换逻辑
        // 例如：格式化日期、计算衍生指标等
      }))
    }

    return processedData
  } catch {
    throw new Error('Failed to fetch risk score history')
  }
} 