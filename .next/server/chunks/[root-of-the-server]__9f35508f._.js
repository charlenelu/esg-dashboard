module.exports = {

"[project]/.next-internal/server/app/api/company-risk-overview/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/repositories/company-risk-overview/companyRiskOverviewRepository.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CompanyRiskOverviewRepository": (()=>CompanyRiskOverviewRepository),
    "companyRiskOverviewRepository": (()=>companyRiskOverviewRepository)
});
class CompanyRiskOverviewRepository {
    async findById(companyId) {
        try {
            // 从本地 JSON 文件导入数据
            const response = await __turbopack_context__.r("[project]/src/repositories/origin-data/company-risk-overview.json (json, async loader)")(__turbopack_context__.i);
            const data = response.default;
            // 模拟根据 companyId 查找数据
            if (data.companyId !== companyId) {
                return null;
            }
            return data;
        } catch (error) {
            console.error('Error in CompanyRiskOverviewRepository.findById:', error);
            throw error;
        }
    }
    async findAll() {
        try {
            const response = await __turbopack_context__.r("[project]/src/repositories/origin-data/company-risk-overview.json (json, async loader)")(__turbopack_context__.i);
            return [
                response.default
            ];
        } catch (error) {
            console.error('Error in CompanyRiskOverviewRepository.findAll:', error);
            throw error;
        }
    }
}
const companyRiskOverviewRepository = new CompanyRiskOverviewRepository();
}}),
"[project]/src/services/company-risk-overview/companyRiskOverviewService.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CompanyRiskOverviewService": (()=>CompanyRiskOverviewService),
    "companyRiskOverviewService": (()=>companyRiskOverviewService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$repositories$2f$company$2d$risk$2d$overview$2f$companyRiskOverviewRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/repositories/company-risk-overview/companyRiskOverviewRepository.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-route] (ecmascript) <locals>");
;
;
class CompanyRiskOverviewService {
    async getRiskOverview(companyId) {
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$repositories$2f$company$2d$risk$2d$overview$2f$companyRiskOverviewRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["companyRiskOverviewRepository"].findById(companyId);
            if (!data) {
                throw new Error('Company risk data not found');
            }
            return this.formatRiskData(data);
        } catch (error) {
            console.error('Error in CompanyRiskOverviewService.getRiskOverview:', error);
            throw error;
        }
    }
    async getAllRiskOverviews() {
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$repositories$2f$company$2d$risk$2d$overview$2f$companyRiskOverviewRepository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["companyRiskOverviewRepository"].findAll();
            return data.map((item)=>this.formatRiskData(item));
        } catch (error) {
            console.error('Error in CompanyRiskOverviewService.getAllRiskOverviews:', error);
            throw error;
        }
    }
    formatRiskData(data) {
        return {
            ...data,
            riskLevel: this.calculateRiskLevel(data.overallRiskScore),
            lastUpdatedFormatted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(data.lastUpdated), 'yyyy-MM-dd HH:mm:ss')
        };
    }
    calculateRiskLevel(score) {
        if (score < 40) return 'low';
        if (score < 70) return 'medium';
        return 'high';
    }
}
const companyRiskOverviewService = new CompanyRiskOverviewService();
}}),
"[project]/src/app/api/company-risk-overview/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$company$2d$risk$2d$overview$2f$companyRiskOverviewService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/company-risk-overview/companyRiskOverviewService.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const companyId = searchParams.get('companyId');
        if (!companyId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Company ID is required'
            }, {
                status: 400
            });
        }
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$company$2d$risk$2d$overview$2f$companyRiskOverviewService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["companyRiskOverviewService"].getRiskOverview(companyId);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (error) {
        console.error('Error fetching company risk overview:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9f35508f._.js.map