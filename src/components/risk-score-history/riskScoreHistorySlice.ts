import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { getRiskScoreHistory } from '../../services/service'

interface RiskScoreData {
  date: string
  overall: number
  environmental: number
  social: number
  governance: number
}

interface RiskScoreHistory {
  companyId: string
  companyName: string
  interval: string
  data: RiskScoreData[]
}

interface RiskScoreHistoryState {
  data: RiskScoreHistory | null
  loading: boolean
  error: string | null
}

const initialState: RiskScoreHistoryState = {
  data: null,
  loading: false,
  error: null
}

export const fetchRiskScoreHistory = createAsyncThunk(
  'riskScoreHistory/fetchRiskScoreHistory',
  async () => {
    try {
      const response = await getRiskScoreHistory()
      return response.default
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to fetch risk score history data')
    }
  }
)

const riskScoreHistorySlice = createSlice({
  name: 'riskScoreHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRiskScoreHistory.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRiskScoreHistory.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchRiskScoreHistory.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch risk score history data'
      })
  }
})

export const selectRiskScoreHistory = (state: RootState) => state.riskScoreHistory

export default riskScoreHistorySlice.reducer 