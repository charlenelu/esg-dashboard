import { Box, Text, Alert, AlertIcon, AlertTitle, AlertDescription, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react'
import type { CompanyRiskOverview } from '@/types/company-risk-overview'
import { fetchCompanyRiskOverview } from '@/lib/company-risk-overview'

export default async function CompanyRiskOverview() {
  let data: CompanyRiskOverview | null = null
  let error: string | null = null

  try {
    data = await fetchCompanyRiskOverview()
  } catch (err) {
    error = err instanceof Error ? err.message : 'An unknown error occurred'
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  if (!data) {
    return (
      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>No Data Available</AlertTitle>
        <AlertDescription>Company risk overview data is not available.</AlertDescription>
      </Alert>
    )
  }

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Company Risk Overview</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        <Stat p={4} bg="white" borderRadius="lg" boxShadow="sm">
          <StatLabel>Overall Risk Score</StatLabel>
          <StatNumber>{data.overallRiskScore}</StatNumber>
          <StatHelpText>
            {data.trend.direction === 'increasing' ? '↑ Increasing' : data.trend.direction === 'decreasing' ? '↓ Decreasing' : '→ Stable'} ({data.trend.percentage}%)
          </StatHelpText>
        </Stat>
        <Stat p={4} bg="white" borderRadius="lg" boxShadow="sm">
          <StatLabel>Environmental</StatLabel>
          <StatNumber>{data.categories.environmental.score}</StatNumber>
          <StatHelpText>
            {data.categories.environmental.trend === 'increasing' ? '↑ Increasing' : data.categories.environmental.trend === 'decreasing' ? '↓ Decreasing' : '→ Stable'} ({data.categories.environmental.changePercentage}%)
          </StatHelpText>
        </Stat>
        <Stat p={4} bg="white" borderRadius="lg" boxShadow="sm">
          <StatLabel>Social</StatLabel>
          <StatNumber>{data.categories.social.score}</StatNumber>
          <StatHelpText>
            {data.categories.social.trend === 'increasing' ? '↑ Increasing' : data.categories.social.trend === 'decreasing' ? '↓ Decreasing' : '→ Stable'} ({data.categories.social.changePercentage}%)
          </StatHelpText>
        </Stat>
        <Stat p={4} bg="white" borderRadius="lg" boxShadow="sm">
          <StatLabel>Governance</StatLabel>
          <StatNumber>{data.categories.governance.score}</StatNumber>
          <StatHelpText>
            {data.categories.governance.trend === 'increasing' ? '↑ Increasing' : data.categories.governance.trend === 'decreasing' ? '↓ Decreasing' : '→ Stable'} ({data.categories.governance.changePercentage}%)
          </StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  )
} 