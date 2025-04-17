Frontend Developer Assessment - Provided Data
Overview
For the ESG Risk Dashboard Component task, we'll provide JSON samples rather than API endpoints. These files contain all the necessary data to complete the
assessment. You should import these files into your application and implement the functionality as if you were consuming an API.
Data Files
1. company-risk-overview.json
Contains current risk scores and trends for the demo company.
{
"companyId": "demo-company-123",
"companyName": "Acme Corporation",
"overallRiskScore": 64,
"trend": {
"direction": "increasing",
"percentage": 8.2
},
"lastUpdated": "2023-11-15T08:30:00Z",
"categories": {
"environmental": {
"score": 72,
"trend": "increasing",
"changePercentage": 12.5
},
"social": {
"score": 58,
"trend": "decreasing",
"changePercentage": -3.2
},
"governance": {
"score": 62,
"trend": "stable",
"changePercentage": 0.8
}
}
}
2. risk-score-history.json
Contains historical risk scores for trend visualization (weekly data points for the past 6 months).
{
"companyId": "demo-company-123",
"companyName": "Acme Corporation",
"interval": "weekly",
"data": [
{
"date": "2023-05-18",
"overall": 52,
"environmental": 48,
"social": 61,
"governance": 47
},
{
"date": "2023-05-25",
"overall": 53,
"environmental": 50,
"social": 60,
"governance": 49
},
},
{
"date": "2023-06-01",
"overall": 54,
"environmental": 51,
"social": 60,
"governance": 51
},
{
"date": "2023-06-08",
"overall": 55,
"environmental": 53,
"social": 59,
"governance": 53
},
{
"date": "2023-06-15",
"overall": 56,
"environmental": 55,
"social": 58,
"governance": 55
},
{
"date": "2023-06-22",
"overall": 55,
"environmental": 54,
"social": 57,
"governance": 54
},
{
"date": "2023-06-29",
"overall": 54,
"environmental": 52,
"social": 58,
"governance": 52
},
{
"date": "2023-07-06",
"overall": 53,
"environmental": 50,
"social": 59,
"governance": 50
},
{
"date": "2023-07-13",
"overall": 55,
"environmental": 52,
"social": 60,
"governance": 53
},
{
"date": "2023-07-20",
"overall": 56,
"environmental": 54,
"social": 60,
"governance": 54
},
{
"date": "2023-07-27",
"overall": 57,
"environmental": 56,
"social": 59,
"governance": 56
},
{
"date": "2023-08-03",
"date": "2023-08-03",
"overall": 58,
"environmental": 58,
"social": 58,
"governance": 58
},
{
"date": "2023-08-10",
"overall": 57,
"environmental": 57,
"social": 57,
"governance": 57
},
{
"date": "2023-08-17",
"overall": 56,
"environmental": 56,
"social": 56,
"governance": 56
},
{
"date": "2023-08-24",
"overall": 58,
"environmental": 59,
"social": 57,
"governance": 58
},
{
"date": "2023-08-31",
"overall": 59,
"environmental": 62,
"social": 58,
"governance": 57
},
{
"date": "2023-09-07",
"overall": 61,
"environmental": 65,
"social": 59,
"governance": 59
},
{
"date": "2023-09-14",
"overall": 60,
"environmental": 64,
"social": 58,
"governance": 58
},
{
"date": "2023-09-21",
"overall": 59,
"environmental": 63,
"social": 57,
"governance": 57
},
{
"date": "2023-09-28",
"overall": 61,
"environmental": 66,
"social": 59,
"governance": 58
},
{
"date": "2023-10-05",
"overall": 62,
"environmental": 67,
"social": 60,
"social": 60,
"governance": 59
},
{
"date": "2023-10-12",
"overall": 63,
"environmental": 68,
"social": 60,
"governance": 61
},
{
"date": "2023-10-19",
"overall": 65,
"environmental": 73,
"social": 59,
"governance": 63
},
{
"date": "2023-10-26",
"overall": 64,
"environmental": 72,
"social": 58,
"governance": 62
},
{
"date": "2023-11-02",
"overall": 66,
"environmental": 72,
"social": 57,
"governance": 69
},
{
"date": "2023-11-09",
"overall": 65,
"environmental": 71,
"social": 58,
"governance": 66
},
{
"date": "2023-11-16",
"overall": 64,
"environmental": 72,
"social": 58,
"governance": 62
}
]
}
3. incidents.json
Contains a comprehensive list of ESG incidents for the company (past 6 months).
{
"companyId": "demo-company-123",
"companyName": "Acme Corporation",
"total": 32,
"incidents": [
{
"id": "incident-456",
"title": "Emissions Reporting Violation",
"date": "2023-10-15T14:30:00Z",
"category": "environmental",
"subcategory": "climate_change",
"severity": "high",
"description": "Company fined €1.5M for misreporting carbon emissions",
"detailedDescription": "Regulatory authorities have imposed a €1.5M fine on Acme Corporation for systematically underreporting carbon e
"detailedDescription": "Regulatory authorities have imposed a €1.5M fine on Acme Corporation for systematically underreporting carbon e"location": "Frankfurt, Germany",
"riskScoreImpact": {
"overall": 8.2,
"environmental": 16.5,
"social": 0,
"governance": 8.0
},
"sources": [
{
"title": "European Regulatory Authority Report",
"url": "https://example.com/regulatory/report-2023-112",
"publishDate": "2023-10-15T10:00:00Z"
},
{
"title": "Company Press Release",
"url": "https://acme-corp.example.com/press/emission-statement",
"publishDate": "2023-10-16T09:30:00Z"
}
]
},
{
"id": "incident-457",
"title": "Workplace Safety Incident",
"date": "2023-09-22T09:15:00Z",
"category": "social",
"subcategory": "labor_practices",
"severity": "medium",
"description": "Three workers injured in manufacturing plant accident",
"detailedDescription": "An equipment malfunction at Acme's Munich manufacturing plant resulted in injuries to three workers, one of who"location": "Munich, Germany",
"riskScoreImpact": {
"overall": 4.5,
"environmental": 0,
"social": 9.3,
"governance": 3.7
},
"sources": [
{
"title": "Local News Report",
"url": "https://example.com/news/workplace-accident",
"publishDate": "2023-09-22T12:45:00Z"
}
]
},
{
"id": "incident-458",
"title": "Executive Resignation",
"date": "2023-10-18T16:45:00Z",
"category": "governance",
"subcategory": "board_structure",
"severity": "medium",
"description": "CFO resigns following emissions reporting scandal",
"detailedDescription": "Acme's Chief Financial Officer has resigned with immediate effect following the emissions reporting violation."location": "Company Headquarters",
"riskScoreImpact": {
"overall": 3.8,
"environmental": 0,
"social": 0,
"governance": 11.5
},
"sources": [
{
"title": "Company Announcement",
"url": "https://acme-corp.example.com/press/cfo-departure",
"publishDate": "2023-10-18T16:30:00Z"
"publishDate": "2023-10-18T16:30:00Z"
}
]
},
{
"id": "incident-459",
"title": "Community Protests Against Expansion",
"date": "2023-08-05T10:20:00Z",
"category": "social",
"subcategory": "community_relations",
"severity": "medium",
"description": "Local communities protest against planned factory expansion",
"detailedDescription": "Residents in Berlin have organized protests against Acme's planned factory expansion, citing concerns about inc"location": "Berlin, Germany",
"riskScoreImpact": {
"overall": 3.2,
"environmental": 1.5,
"social": 8.4,
"governance": 0
},
"sources": [
{
"title": "Local News Coverage",
"url": "https://example.com/news/community-protest",
"publishDate": "2023-08-05T14:10:00Z"
}
]
},
{
"id": "incident-460",
"title": "Data Privacy Breach",
"date": "2023-11-02T08:15:00Z",
"category": "governance",
"subcategory": "business_ethics",
"severity": "critical",
"description": "Customer data breach affecting 100,000+ users",
"detailedDescription": "A significant security breach was discovered in Acme's customer database, potentially exposing personal and fin"location": "Global",
"riskScoreImpact": {
"overall": 12.7,
"environmental": 0,
"social": 8.3,
"governance": 17.5
},
"sources": [
{
"title": "Company Security Notice",
"url": "https://acme-corp.example.com/security/data-incident",
"publishDate": "2023-11-02T12:00:00Z"
},
{
"title": "Technology News Coverage",
"url": "https://example.com/tech/acme-data-breach",
"publishDate": "2023-11-02T15:30:00Z"
}
]
},
{
"id": "incident-461",
"title": "Supply Chain Labor Violations",
"date": "2023-07-12T11:30:00Z",
"category": "social",
"subcategory": "human_rights",
"severity": "high",
"description": "Report reveals labor violations at key supplier factories",
"detailedDescription": "An NGO investigation has uncovered concerning labor practices at three factories operated by Acme's key compone
"location": "Multiple locations in Asia",
"riskScoreImpact": {
"overall": 7.8,
"environmental": 0,
"social": 16.2,
"governance": 4.9
},
"sources": [
{
"title": "NGO Investigative Report",
"url": "https://example.org/reports/supply-chain-2023",
"publishDate": "2023-07-12T09:00:00Z"
}
]
},
{
"id": "incident-462",
"title": "Misleading Product Claims",
"date": "2023-08-23T14:20:00Z",
"category": "governance",
"subcategory": "business_ethics",
"severity": "medium",
"description": "Consumer protection agency challenges 'eco-friendly' marketing claims",
"detailedDescription": "The national consumer protection agency has issued a formal warning to Acme regarding potentially misleading ma"location": "National",
"riskScoreImpact": {
"overall": 4.2,
"environmental": 2.8,
"social": 1.5,
"governance": 9.4
},
"sources": [
{
"title": "Consumer Protection Agency Statement",
"url": "https://example.gov/consumer-protection/notices/2023-08-23",
"publishDate": "2023-08-23T13:00:00Z"
}
]
},
{
"id": "incident-463",
"title": "Water Pollution Incident",
"date": "2023-06-08T07:45:00Z",
"category": "environmental",
"subcategory": "pollution",
"severity": "high",
"description": "Chemical spill contaminates local water source",
"detailedDescription": "A chemical spill at Acme's manufacturing facility resulted in contamination of a nearby river, affecting local"location": "Rhine River, Germany",
"riskScoreImpact": {
"overall": 7.9,
"environmental": 15.6,
"social": 5.2,
"governance": 3.0
},
"sources": [
{
"title": "Environmental Protection Agency Notice",
"url": "https://example.gov/environmental/incidents/2023-06-08",
"publishDate": "2023-06-08T12:30:00Z"
},
{
"title": "Local News Coverage",
"url": "https://example.com/news/chemical-spill",
"publishDate": "2023-06-08T10:15:00Z"
}
}
]
},
{
"id": "incident-464",
"title": "Gender Pay Gap Report",
"date": "2023-09-15T09:30:00Z",
"category": "social",
"subcategory": "labor_practices",
"severity": "low",
"description": "Report shows 18% gender pay gap at company",
"detailedDescription": "Acme's mandatory gender pay gap report reveals an 18% difference in average pay between male and female employe"location": "Company-wide",
"riskScoreImpact": {
"overall": 2.1,
"environmental": 0,
"social": 6.5,
"governance": 0
},
"sources": [
{
"title": "Company Diversity Report",
"url": "https://acme-corp.example.com/diversity/gender-pay-2023",
"publishDate": "2023-09-15T09:00:00Z"
}
]
},
{
"id": "incident-465",
"title": "Executive Compensation Controversy",
"date": "2023-07-28T15:45:00Z",
"category": "governance",
"subcategory": "executive_compensation",
"severity": "medium",
"description": "Shareholders dispute CEO bonus amid declining performance",
"detailedDescription": "At Acme's annual shareholder meeting, a significant minority of investors voted against the CEO's €3.5M perform"location": "Company Headquarters",
"riskScoreImpact": {
"overall": 3.5,
"environmental": 0,
"social": 0,
"governance": 10.6
},
"sources": [
{
"title": "Financial Times Article",
"url": "https://example.com/financial/acme-shareholder-revolt",
"publishDate": "2023-07-28T18:20:00Z"
}
]
},
{
"id": "incident-466",
"title": "Product Safety Recall",
"date": "2023-10-30T11:20:00Z",
"category": "social",
"subcategory": "product_safety",
"severity": "medium",
"description": "Safety recall issued for consumer product line",
"detailedDescription": "Acme has issued a voluntary recall for its latest consumer electronics product after reports of overheating bat"location": "European Markets",
"riskScoreImpact": {
"overall": 4.8,
"environmental": 1.2,
"social": 9.7,
"governance": 2.5
"governance": 2.5
},
"sources": [
{
"title": "Product Safety Recall Notice",
"url": "https://acme-corp.example.com/recall/october-2023",
"publishDate": "2023-10-30T11:00:00Z"
}
]
},
{
"id": "incident-467",
"title": "Renewable Energy Commitment",
"date": "2023-06-22T14:00:00Z",
"category": "environmental",
"subcategory": "climate_change",
"severity": "low",
"description": "Company pledges 100% renewable energy by 2030",
"detailedDescription": "In a positive development, Acme has announced a commitment to power all operations with 100% renewable energy b"location": "Global Operations",
"riskScoreImpact": {
"overall": -1.5,
"environmental": -4.2,
"social": 0,
"governance": 0
},
"sources": [
{
"title": "Company Sustainability Announcement",
"url": "https://acme-corp.example.com/sustainability/renewable-commitment",
"publishDate": "2023-06-22T13:30:00Z"
}
]
},
{
"id": "incident-468",
"title": "Biodiversity Impact Assessment",
"date": "2023-08-14T10:10:00Z",
"category": "environmental",
"subcategory": "biodiversity",
"severity": "medium",
"description": "Study shows facility expansion threatens protected species",
"detailedDescription": "An independent environmental impact assessment has identified potential threats to several protected species fr"location": "Northern Germany",
"riskScoreImpact": {
"overall": 3.8,
"environmental": 8.9,
"social": 2.1,
"governance": 0
},
"sources": [
{
"title": "Environmental Impact Report",
"url": "https://example.org/reports/acme-biodiversity-2023",
"publishDate": "2023-08-14T09:00:00Z"
}
]
},
{
"id": "incident-469",
"title": "Board Diversity Challenge",
"date": "2023-09-05T13:30:00Z",
"category": "governance",
"subcategory": "board_structure",
"severity": "low",
"description": "Investors push for increased board diversity",
"detailedDescription": "A coalition of institutional investors has filed a shareholder proposal calling for Acme to increase diversity
"detailedDescription": "A coalition of institutional investors has filed a shareholder proposal calling for Acme to increase diversity"location": "Corporate Governance",
"riskScoreImpact": {
"overall": 1.9,
"environmental": 0,
"social": 0.8,
"governance": 5.2
},
"sources": [
{
"title": "Investor Relations Filing",
"url": "https://acme-corp.example.com/investors/shareholder-proposals-2023",
"publishDate": "2023-09-05T13:00:00Z"
}
]
},
{
"id": "incident-470",
"title": "Conflict Minerals Audit",
"date": "2023-11-10T09:45:00Z",
"category": "social",
"subcategory": "human_rights",
"severity": "medium",
"description": "Audit finds insufficient diligence on conflict minerals in supply chain",
"detailedDescription": "A third-party audit has identified gaps in Acme's due diligence process for ensuring its supply chain is free f"location": "Global Supply Chain",
"riskScoreImpact": {
"overall": 3.6,
"environmental": 0,
"social": 7.8,
"governance": 2.9
},
"sources": [
{
"title": "Supply Chain Audit Report",
"url": "https://example.org/audits/conflict-minerals-2023",
"publishDate": "2023-11-10T08:30:00Z"
}
]
}
]
}
4. critical-incidents.json
Contains high-impact incidents that significantly affected risk scores in the past 30 days.
{
"companyId": "demo-company-123",
"companyName": "Acme Corporation",
"criticalIncidents": [
{
"id": "incident-456",
"title": "Emissions Reporting Violation",
"date": "2023-10-15T14:30:00Z",
"category": "environmental",
"severity": "high",
"description": "Company fined €1.5M for misreporting carbon emissions",
"location": "Frankfurt, Germany",
"riskScoreImpact": 8.2,
"summary": "Regulatory authorities imposed a substantial fine for deliberate manipulation of emissions reporting data, affecting invest},
{
"id": "incident-460",
"title": "Data Privacy Breach",
"date": "2023-11-02T08:15:00Z",
"category": "governance",
"severity": "critical",
"description": "Customer data breach affecting 100,000+ users",
"location": "Global",
"riskScoreImpact": 12.7,
"summary": "A major data breach exposed sensitive customer information, triggering regulatory investigations in multiple jurisdictions},
{
"id": "incident-470",
"title": "Conflict Minerals Audit",
"date": "2023-11-10T09:45:00Z",
"category": "social",
"severity": "medium",
"description": "Audit finds insufficient diligence on conflict minerals in supply chain",
"location": "Global Supply Chain",
"riskScoreImpact": 3.6,
"summary": "Third-party audit revealed inadequate screening for conflict minerals, raising concerns about human rights implications in}
]
}
5. esg-categories.json
Reference information about ESG categories for filtering and display.
{
"categories": [
{
"id": "environmental",
"name": "Environmental",
"description": "Factors related to a company's impact on the natural environment",
"color": "#4CAF50",
"subcategories": [
{"id": "climate_change", "name": "Climate Change"},
{"id": "pollution", "name": "Pollution"},
{"id": "resource_use", "name": "Resource Use"},
{"id": "biodiversity", "name": "Biodiversity"}
]
},
{
"id": "social",
"name": "Social",
"description": "Factors related to a company's relationships with stakeholders",
"color": "#2196F3",
"subcategories": [
{"id": "labor_practices", "name": "Labor Practices"},
{"id": "human_rights", "name": "Human Rights"},
{"id": "community_relations", "name": "Community Relations"},
{"id": "product_safety", "name": "Product Safety"}
]
},
{
"id": "governance",
"name": "Governance",
"description": "Factors related to a company's leadership and controls",
"color": "#9C27B0",
"subcategories": [
{"id": "board_structure", "name": "Board Structure"},
{"id": "business_ethics", "name": "Business Ethics"},
{"id": "executive_compensation", "name": "Executive Compensation"},
{"id": "transparency", "name": "Transparency"}
]
}
]
}
6. severity-levels.json
Reference information about severity levels for filtering and display.
{
"severityLevels": [
{
"id": "critical",
"name": "Critical",
"description": "Severe incidents with significant impact on risk score",
"color": "#D32F2F"
},
{
"id": "high",
"name": "High",
"description": "Major incidents with substantial impact on risk score",
"color": "#F57C00"
},
{
"id": "medium",
"name": "Medium",
"description": "Moderate incidents with notable impact on risk score",
"color": "#FFA000"
},
{
"id": "low",
"name": "Low",
"description": "Minor incidents with minimal impact on risk score",
"color": "#FBC02D"
}
]
}
Implementation Instructions
1. Data Import: Import the provided JSON files into your React application. You may use dynamic imports or statically import them as needed.
2. Mock Service Layer: Create a service layer that simulates API calls by returning the appropriate data from these files. This should include:
Functions for loading each data type
Filtering capabilities (for incidents by date, category, etc.)
Error handling to simulate real-world API behavior
3. Data Transformation: Transform the data as needed for your UI components. This may include:
Formatting dates for display
Calculating aggregates or statistics
Preparing data for charts and visualizations
4. Component Implementation: Implement the required UI components according to the task description, using the data provided through your service layer.
5. Loading States & Error Handling: Even though you're using local data, implement appropriate loading states and error handling to simulate real-world
scenarios.
Example Usage
// Example service function
const getIncidentsByDateRange = (startDate, endDate) => {
return new Promise((resolve) => {
// Simulate network delay
setTimeout(() => {
const incidents = incidentsData.incidents.filter(incident => {
const incidentDate = new Date(incident.date);
return incidentDate >= startDate && incidentDate <= endDate;
});
resolve({
...incidentsData,
incidents
});
}, 500);
});
};
// Example component usage
const IncidentTimeline = () => {
const [loading, setLoading] = useState(true);
const [incidents, setIncidents] = useState([]);
useEffect(() => {
const fetchData = async () => {
setLoading(true);
try {
const startDate = new Date();
startDate.setMonth(startDate.getMonth() - 3);
const data = await getIncidentsByDateRange(startDate, new Date());
setIncidents(data.incidents);
} catch (error) {
console.error("Error fetching incidents:", error);
} finally {
setLoading(false);
}
};
fetchData();
}, []);
if (loading) return <LoadingIndicator />;
return (
<div className="incident-timeline">
{/* Render timeline with incidents */}
</div>
);
};
This approach will allow you to focus on building the UI components while simulating realistic data fetching patterns. Feel free to extend or modify or correct the
provided data as per your needs.