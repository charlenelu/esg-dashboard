import { createSelector } from '@reduxjs/toolkit'

export interface Subcategory {
  id: string
  name: string
}

export interface ESGCategory {
  id: string
  name: string
  description: string
  color: string
  subcategories: Subcategory[]
}

export interface ESGCategories {
  categories: ESGCategory[]
}

export interface ESGCategoriesState {
  data: ESGCategories | null
  loading: boolean
  error: string | null
}

export const selectESGCategories = createSelector(
  (state: { esgCategories?: ESGCategoriesState }) => state?.esgCategories,
  (esgCategories) => ({
    data: esgCategories?.data || null,
    loading: esgCategories?.loading || false,
    error: esgCategories?.error || null
  })
)
