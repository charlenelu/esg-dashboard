import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { getESGCategories } from '../../services/service'

interface Subcategory {
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

interface ESGCategories {
  categories: ESGCategory[]
}

interface ESGCategoriesState {
  data: ESGCategories | null
  loading: boolean
  error: string | null
}

const initialState: ESGCategoriesState = {
  data: null,
  loading: false,
  error: null
}

export const fetchESGCategories = createAsyncThunk(
  'esgCategories/fetchESGCategories',
  async () => {
    try {
      const response = await getESGCategories()
      return response.default
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to fetch ESG categories data')
    }
  }
)

const esgCategoriesSlice = createSlice({
  name: 'esgCategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchESGCategories.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchESGCategories.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchESGCategories.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch ESG categories data'
      })
  }
})

export const selectESGCategories = (state: RootState) => state.esgCategories

export default esgCategoriesSlice.reducer 