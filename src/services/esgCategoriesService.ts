import { getESGCategories } from '../repositories/esgCategoriesRepository'

export const esgCategoriesService = {
  async getCategories() {
    return await getESGCategories()
  }
} 