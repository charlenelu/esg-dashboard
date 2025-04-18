import { CompanyRiskOverview } from '@/types/company-risk-overview-type'

export class CompanyRiskOverviewRepository {
  async findById(companyId: string): Promise<CompanyRiskOverview | null> {
    try {
      // 从本地 JSON 文件导入数据
      const response = await import('../origin-data/company-risk-overview.json')
      const data = response.default

      // 模拟根据 companyId 查找数据
      if (data.companyId !== companyId) {
        return null
      }

      return data
    } catch (error) {
      console.error('Error in CompanyRiskOverviewRepository.findById:', error)
      throw error
    }
  }

  async findAll(): Promise<CompanyRiskOverview[]> {
    try {
      const response = await import('../origin-data/company-risk-overview.json')
      return [response.default]
    } catch (error) {
      console.error('Error in CompanyRiskOverviewRepository.findAll:', error)
      throw error
    }
  }
}

export const companyRiskOverviewRepository = new CompanyRiskOverviewRepository() 