import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { getCriticalIncidents } from '../../services/service'

interface CriticalIncident {
  id: string
  title: string
  date: string
  category: string
  severity: string
  description: string
  location: string
  riskScoreImpact: number
  summary: string
}

interface CriticalIncidents {
  companyId: string
  companyName: string
  criticalIncidents: CriticalIncident[]
}

interface CriticalIncidentsState {
  data: CriticalIncidents | null
  loading: boolean
  error: string | null
}

const initialState: CriticalIncidentsState = {
  data: null,
  loading: false,
  error: null
}

export const fetchCriticalIncidents = createAsyncThunk(
  'criticalIncidents/fetchCriticalIncidents',
  async () => {
    try {
      const response = await getCriticalIncidents()
      return response.default
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to fetch critical incidents data')
    }
  }
)

const criticalIncidentsSlice = createSlice({
  name: 'criticalIncidents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCriticalIncidents.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCriticalIncidents.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchCriticalIncidents.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch critical incidents data'
      })
  }
})

export const selectCriticalIncidents = (state: RootState) => state.criticalIncidents

export default criticalIncidentsSlice.reducer 