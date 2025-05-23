import { Box, Container, Grid, GridItem, VStack, Heading } from '@chakra-ui/react'
import CompanyRiskOverview from '@/components/company-risk-overview/CompanyRiskOverview'
import RiskScoreHistoryServer from '@/components/risk-score-history/RiskScoreHistoryServer'
import Incidents from '@/components/incidents/Incidents'
import CriticalIncidents from '@/components/critical-incidents/CriticalIncidents'
import ESGCategories from '@/components/esg-categories/ESGCategories'
import SeverityLevels from '@/components/severity-levels/SeverityLevels'

export default function DashboardPage() {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading size="xl" mb={6}>ESG Dashboard</Heading>
        
        <Grid 
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }} 
          gap={6}
        >
          {/* 左侧主要区域 */}
          <GridItem colSpan={{ base: 12, md: 8 }}>
            <VStack spacing={6} align="stretch">
              <Box bg="white" borderRadius="xl" p={6} boxShadow="sm">
                <CompanyRiskOverview />
              </Box>
              
              <Box bg="white" borderRadius="xl" p={6} boxShadow="sm">
                <RiskScoreHistoryServer />
              </Box>
              
              <Box bg="white" borderRadius="xl" p={6} boxShadow="sm">
                <Incidents />
              </Box>
              
              <Box bg="white" borderRadius="xl" p={6} boxShadow="sm">
                <CriticalIncidents />
              </Box>
            </VStack>
          </GridItem>
          
          {/* 右侧边栏 */}
          <GridItem colSpan={{ base: 12, md: 4 }}>
            <VStack spacing={6} align="stretch">
              <Box bg="white" borderRadius="xl" p={6} boxShadow="sm">
                <ESGCategories />
              </Box>
              
              <Box bg="white" borderRadius="xl" p={6} boxShadow="sm">
                <SeverityLevels />
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  )
} 