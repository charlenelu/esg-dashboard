export const getCompanyRiskOverview = async () => {
    const response = await import('./origin-data/company-risk-overview.json');
    return response;
};

export const getRiskScoreHistory = async () => {
    const response = await import('./origin-data/risk-score-history.json');
    return response;
};

export const getCriticalIncidents = async () => {
    const response = await import('./origin-data/critical-incidents.json');
    return response;
};

export const getESGCategories = async () => {
    const response = await import('./origin-data/esg-categories.json');
    return response;
};

export const getSeverityLevels = async () => {
    const response = await import('./origin-data/severity-levels.json');
    return response;
};

export const getIncidents = async () => {
    const response = await import('./origin-data/incidents.json');
    return response;
};