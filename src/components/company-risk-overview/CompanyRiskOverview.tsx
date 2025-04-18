import { Box, Text, Alert, AlertIcon, AlertTitle, AlertDescription, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, VStack } from '@chakra-ui/react'
import type { CompanyRiskOverview } from '@/types/company-risk-overview-type'
import { fetchCompanyRiskOverview } from '@/lib/company-risk-overview-utils'
import { esgCategoriesService } from '@/services/esgCategoriesService'
import { ESGCategory } from '../esg-categories/esgCategoriesSlice'

export default async function CompanyRiskOverview() {
  let data: CompanyRiskOverview | null = null
  let error: string | null = null
  let categories: ESGCategory[] | null = null

  try {
    data = await fetchCompanyRiskOverview()
    categories = (await esgCategoriesService.getCategories()).categories
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

  const getCategoryColor = (categoryName: string) => {
    const category = categories?.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase())
    return category?.color || 'white'
  }

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Company Risk Overview</Text>
      <VStack spacing={4} align="stretch">
        <Stat p={4} bg="white" borderWidth="1px" borderLeftWidth="4px" borderColor="orange.500" borderRadius="lg" boxShadow="sm">
          <StatLabel>Overall Risk Score</StatLabel>
          <StatNumber>{data.overallRiskScore}</StatNumber>
          <StatHelpText>
            {data.trend.direction === 'increasing' ? '↑ Increasing' : data.trend.direction === 'decreasing' ? '↓ Decreasing' : '→ Stable'} ({data.trend.percentage}%)
          </StatHelpText>
        </Stat>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          <Stat p={4} bg="white" borderWidth="1px" borderLeftWidth="4px" borderColor={getCategoryColor('Environmental')} borderRadius="lg" boxShadow="sm">
            <StatLabel>Environmental</StatLabel>
            <StatNumber>{data.categories.environmental.score}</StatNumber>
            <StatHelpText>
              {data.categories.environmental.trend === 'increasing' ? '↑ Increasing' : data.categories.environmental.trend === 'decreasing' ? '↓ Decreasing' : '→ Stable'} ({data.categories.environmental.changePercentage}%)
            </StatHelpText>
          </Stat>
          <Stat p={4} bg="white" borderWidth="1px" borderLeftWidth="4px" borderColor={getCategoryColor('Social')} borderRadius="lg" boxShadow="sm">
            <StatLabel>Social</StatLabel>
            <StatNumber>{data.categories.social.score}</StatNumber>
            <StatHelpText>
              {data.categories.social.trend === 'increasing' ? '↑ Increasing' : data.categories.social.trend === 'decreasing' ? '↓ Decreasing' : '→ Stable'} ({data.categories.social.changePercentage}%)
            </StatHelpText>
          </Stat>
          <Stat p={4} bg="white" borderWidth="1px" borderLeftWidth="4px" borderColor={getCategoryColor('Governance')} borderRadius="lg" boxShadow="sm">
            <StatLabel>Governance</StatLabel>
            <StatNumber>{data.categories.governance.score}</StatNumber>
            <StatHelpText>
              {data.categories.governance.trend === 'increasing' ? '↑ Increasing' : data.categories.governance.trend === 'decreasing' ? '↓ Decreasing' : '→ Stable'} ({data.categories.governance.changePercentage}%)
            </StatHelpText>
          </Stat>
        </SimpleGrid>
      </VStack>
    </Box>
  )
} 