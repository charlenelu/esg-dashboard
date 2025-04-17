import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/components/counter/counterSlice'
import riskScoreHistoryReducer from '@/components/risk-score-history/riskScoreHistorySlice'
import incidentsReducer from '@/components/incidents/incidentsSlice'
import esgCategoriesReducer from '@/components/esg-categories/esgCategoriesSlice'
import criticalIncidentsReducer from '@/components/critical-incidents/criticalIncidentsSlice'
import severityLevelsReducer from '@/components/severity-levels/severityLevelsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    riskScoreHistory: riskScoreHistoryReducer,
    incidents: incidentsReducer,
    esgCategories: esgCategoriesReducer,
    criticalIncidents: criticalIncidentsReducer,
    severityLevels: severityLevelsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 