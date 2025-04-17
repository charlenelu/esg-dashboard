module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/counter/counterSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "counterSlice": (()=>counterSlice),
    "decrement": (()=>decrement),
    "default": (()=>__TURBOPACK__default__export__),
    "increment": (()=>increment),
    "incrementByAmount": (()=>incrementByAmount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    value: 0
};
const counterSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        incrementByAmount: (state, action)=>{
            state.value += action.payload;
        }
    }
});
const { increment, decrement, incrementByAmount } = counterSlice.actions;
const __TURBOPACK__default__export__ = counterSlice.reducer;
}}),
"[project]/src/services/service.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCompanyRiskOverview": (()=>getCompanyRiskOverview),
    "getCriticalIncidents": (()=>getCriticalIncidents),
    "getESGCategories": (()=>getESGCategories),
    "getIncidents": (()=>getIncidents),
    "getRiskScoreHistory": (()=>getRiskScoreHistory),
    "getSeverityLevels": (()=>getSeverityLevels)
});
const getCompanyRiskOverview = async ()=>{
    const response = await __turbopack_context__.r("[project]/src/services/origin-data/company-risk-overview.json (json, async loader)")(__turbopack_context__.i);
    return response;
};
const getRiskScoreHistory = async ()=>{
    const response = await __turbopack_context__.r("[project]/src/services/origin-data/risk-score-history.json (json, async loader)")(__turbopack_context__.i);
    return response;
};
const getCriticalIncidents = async ()=>{
    const response = await __turbopack_context__.r("[project]/src/services/origin-data/critical-incidents.json (json, async loader)")(__turbopack_context__.i);
    return response;
};
const getESGCategories = async ()=>{
    const response = await __turbopack_context__.r("[project]/src/services/origin-data/esg-categories.json (json, async loader)")(__turbopack_context__.i);
    return response;
};
const getSeverityLevels = async ()=>{
    const response = await __turbopack_context__.r("[project]/src/services/origin-data/severity-levels.json (json, async loader)")(__turbopack_context__.i);
    return response;
};
const getIncidents = async ()=>{
    const response = await __turbopack_context__.r("[project]/src/services/origin-data/incidents.json (json, async loader)")(__turbopack_context__.i);
    return response;
};
}}),
"[project]/src/components/risk-score-history/riskScoreHistorySlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchRiskScoreHistory": (()=>fetchRiskScoreHistory),
    "selectRiskScoreHistory": (()=>selectRiskScoreHistory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/service.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    data: null,
    loading: false,
    error: null
};
const fetchRiskScoreHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('riskScoreHistory/fetchRiskScoreHistory', async ()=>{
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRiskScoreHistory"])();
        return response.default;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'Failed to fetch risk score history data');
    }
});
const riskScoreHistorySlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'riskScoreHistory',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchRiskScoreHistory.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchRiskScoreHistory.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        }).addCase(fetchRiskScoreHistory.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch risk score history data';
        });
    }
});
const selectRiskScoreHistory = (state)=>state.riskScoreHistory;
const __TURBOPACK__default__export__ = riskScoreHistorySlice.reducer;
}}),
"[project]/src/components/incidents/incidentsSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchIncidents": (()=>fetchIncidents),
    "selectIncidents": (()=>selectIncidents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/service.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    data: null,
    loading: false,
    error: null
};
const fetchIncidents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('incidents/fetchIncidents', async ()=>{
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIncidents"])();
        return response.default;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'Failed to fetch incidents data');
    }
});
const incidentsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'incidents',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchIncidents.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchIncidents.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        }).addCase(fetchIncidents.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch incidents data';
        });
    }
});
const selectIncidents = (state)=>state.incidents;
const __TURBOPACK__default__export__ = incidentsSlice.reducer;
}}),
"[project]/src/components/esg-categories/esgCategoriesSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchESGCategories": (()=>fetchESGCategories),
    "selectESGCategories": (()=>selectESGCategories)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/service.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    data: null,
    loading: false,
    error: null
};
const fetchESGCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('esgCategories/fetchESGCategories', async ()=>{
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getESGCategories"])();
        return response.default;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'Failed to fetch ESG categories data');
    }
});
const esgCategoriesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'esgCategories',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchESGCategories.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchESGCategories.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        }).addCase(fetchESGCategories.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch ESG categories data';
        });
    }
});
const selectESGCategories = (state)=>state.esgCategories;
const __TURBOPACK__default__export__ = esgCategoriesSlice.reducer;
}}),
"[project]/src/components/critical-incidents/criticalIncidentsSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchCriticalIncidents": (()=>fetchCriticalIncidents),
    "selectCriticalIncidents": (()=>selectCriticalIncidents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/service.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    data: null,
    loading: false,
    error: null
};
const fetchCriticalIncidents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('criticalIncidents/fetchCriticalIncidents', async ()=>{
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCriticalIncidents"])();
        return response.default;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'Failed to fetch critical incidents data');
    }
});
const criticalIncidentsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'criticalIncidents',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchCriticalIncidents.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchCriticalIncidents.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        }).addCase(fetchCriticalIncidents.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch critical incidents data';
        });
    }
});
const selectCriticalIncidents = (state)=>state.criticalIncidents;
const __TURBOPACK__default__export__ = criticalIncidentsSlice.reducer;
}}),
"[project]/src/components/severity-levels/severityLevelsSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchSeverityLevels": (()=>fetchSeverityLevels),
    "selectSeverityLevels": (()=>selectSeverityLevels)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/service.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    data: null,
    loading: false,
    error: null
};
const fetchSeverityLevels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('severityLevels/fetchSeverityLevels', async ()=>{
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSeverityLevels"])();
        return response.default;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'Failed to fetch severity levels data');
    }
});
const severityLevelsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'severityLevels',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchSeverityLevels.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchSeverityLevels.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        }).addCase(fetchSeverityLevels.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch severity levels data';
        });
    }
});
const selectSeverityLevels = (state)=>state.severityLevels;
const __TURBOPACK__default__export__ = severityLevelsSlice.reducer;
}}),
"[project]/src/store/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$counter$2f$counterSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/counter/counterSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$risk$2d$score$2d$history$2f$riskScoreHistorySlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/risk-score-history/riskScoreHistorySlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$incidents$2f$incidentsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/incidents/incidentsSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$esg$2d$categories$2f$esgCategoriesSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/esg-categories/esgCategoriesSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$critical$2d$incidents$2f$criticalIncidentsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/critical-incidents/criticalIncidentsSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$severity$2d$levels$2f$severityLevelsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/severity-levels/severityLevelsSlice.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        counter: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$counter$2f$counterSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        riskScoreHistory: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$risk$2d$score$2d$history$2f$riskScoreHistorySlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        incidents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$incidents$2f$incidentsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        esgCategories: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$esg$2d$categories$2f$esgCategoriesSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        criticalIncidents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$critical$2d$incidents$2f$criticalIncidentsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        severityLevels: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$severity$2d$levels$2f$severityLevelsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
}}),
"[project]/src/app/(dashboard)/providers.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$chakra$2d$provider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/chakra-provider.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$chakra$2d$provider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChakraProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/providers.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/providers.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/(dashboard)/layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$providers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/providers.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$providers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Providers"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/layout.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/layout.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/layout.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7423ab71._.js.map