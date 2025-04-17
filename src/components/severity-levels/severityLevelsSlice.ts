import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { getSeverityLevels } from '../../services/service'

interface SeverityLevel {
  id: string
  name: string
  description: string
  color: string
}

interface SeverityLevels {
  severityLevels: SeverityLevel[]
}

interface SeverityLevelsState {
  data: SeverityLevels | null
  loading: boolean
  error: string | null
}

const initialState: SeverityLevelsState = {
  data: null,
  loading: false,
  error: null
}

export const fetchSeverityLevels = createAsyncThunk(
  'severityLevels/fetchSeverityLevels',
  async () => {
    try {
      const response = await getSeverityLevels()
      return response.default
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to fetch severity levels data')
    }
  }
)

const severityLevelsSlice = createSlice({
  name: 'severityLevels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeverityLevels.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSeverityLevels.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchSeverityLevels.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch severity levels data'
      })
  }
})

export const selectSeverityLevels = (state: RootState) => state.severityLevels

export default severityLevelsSlice.reducer 