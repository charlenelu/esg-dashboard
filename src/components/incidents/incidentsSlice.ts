import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { getIncidents } from '../../services/service'

interface RiskScoreImpact {
  overall: number
  environmental: number
  social: number
  governance: number
}

interface Source {
  title: string
  url: string
  publishDate: string
}

interface Incident {
  id: string
  title: string
  date: string
  category: string
  subcategory: string
  severity: string
  description: string
  detailedDescription: string
  location: string
  riskScoreImpact: RiskScoreImpact
  sources: Source[]
}

interface Incidents {
  companyId: string
  companyName: string
  total: number
  incidents: Incident[]
}

interface IncidentsState {
  data: Incidents | null
  loading: boolean
  error: string | null
}

const initialState: IncidentsState = {
  data: null,
  loading: false,
  error: null
}

export const fetchIncidents = createAsyncThunk(
  'incidents/fetchIncidents',
  async () => {
    try {
      const response = await getIncidents()
      return response.default
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to fetch incidents data')
    }
  }
)

const incidentsSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncidents.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchIncidents.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchIncidents.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch incidents data'
      })
  }
})

export const selectIncidents = (state: RootState) => state.incidents

export default incidentsSlice.reducer 