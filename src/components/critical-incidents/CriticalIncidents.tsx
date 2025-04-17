'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, VStack, Text, Badge, HStack, Spinner, Alert, AlertIcon } from '@chakra-ui/react'
import { fetchIncidents, selectIncidents } from '../incidents/incidentsSlice'
import { selectSeverityLevels } from '../severity-levels/severityLevelsSlice'
import { selectESGCategories } from '../esg-categories/esgCategoriesSlice'
import type { CompanyRiskOverview } from '@/types/company-risk-overview'
import { fetchCompanyRiskOverview } from '@/lib/company-risk-overview'
import { AppDispatch } from '../../store'
import type { ESGCategory } from '../esg-categories/esgCategoriesSlice'

const CriticalIncidents = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data: incidentsData, loading: incidentsLoading, error: incidentsError } = useSelector(selectIncidents)
  const { data: severityLevelsData } = useSelector(selectSeverityLevels)
  const { data: esgCategoriesData } = useSelector(selectESGCategories)
  const [companyRiskOverviewData, setCompanyRiskOverviewData] = useState<CompanyRiskOverview | null>(null)
  const [companyRiskLoading, setCompanyRiskLoading] = useState(false)
  const [companyRiskError, setCompanyRiskError] = useState<string | null>(null)

  useEffect(() => {
    dispatch(fetchIncidents())
    loadCompanyRiskOverview()
  }, [dispatch])

  const loadCompanyRiskOverview = async () => {
    try {
      setCompanyRiskLoading(true)
      const data = await fetchCompanyRiskOverview()
      setCompanyRiskOverviewData(data)
    } catch (error) {
      setCompanyRiskError(error instanceof Error ? error.message : 'Failed to fetch company risk overview data')
    } finally {
      setCompanyRiskLoading(false)
    }
  }

  const getSeverityColor = (severity: string) => {
    const level = severityLevelsData?.severityLevels.find(
      level => level.id.toLowerCase() === severity.toLowerCase()
    )
    return level?.color || '#FBC02D' // default to low severity color if not found
  }

  const getCategoryColor = (category: string) => {
    const esgCategory = esgCategoriesData?.categories.find(
      (cat: ESGCategory) => cat.id.toLowerCase() === category.toLowerCase()
    )
    return esgCategory?.color || '#9C27B0' // default to governance color if not found
  }

  const getCategoryName = (categoryId: string) => {
    const esgCategory = esgCategoriesData?.categories.find(
      (cat: ESGCategory) => cat.id.toLowerCase() === categoryId.toLowerCase()
    )
    return esgCategory?.name || categoryId
  }

  const getSubcategoryName = (categoryId: string, subcategoryId: string) => {
    const esgCategory = esgCategoriesData?.categories.find(
      (cat: ESGCategory) => cat.id.toLowerCase() === categoryId.toLowerCase()
    )
    const subcategory = esgCategory?.subcategories.find(
      (sub) => sub.id.toLowerCase() === subcategoryId.toLowerCase()
    )
    return subcategory?.name || subcategoryId
  }

  if (incidentsLoading || companyRiskLoading) {
    return (
      <Box p={4} textAlign="center">
        <Spinner />
      </Box>
    )
  }

  if (incidentsError || companyRiskError) {
    return (
      <Alert status="error">
        <AlertIcon />
        {incidentsError || companyRiskError}
      </Alert>
    )
  }

  const lastUpdated = companyRiskOverviewData?.lastUpdated
    ? new Date(companyRiskOverviewData.lastUpdated)
    : new Date()
  const sixtyDaysAgo = new Date(lastUpdated)
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60)

  const criticalIncidents = incidentsData?.incidents
    ?.filter(incident => {
      const incidentDate = new Date(incident.date)
      const isRecent = incidentDate >= sixtyDaysAgo
      const isHighSeverity = ['high', 'critical'].includes(incident.severity.toLowerCase())
      return isRecent && isHighSeverity
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  if (!criticalIncidents || criticalIncidents.length === 0) {
    return (
      <Box p={4}>
        <Text>No critical incidents found in the last 60 days</Text>
      </Box>
    )
  }

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <HStack justify="space-between">
          <Text fontSize="lg" fontWeight="bold">
            Critical Incidents (Last 60 Days)
          </Text>
          <Text fontSize="sm" color="gray.500">
            Last Updated: {lastUpdated.toLocaleDateString()}
          </Text>
        </HStack>
        {criticalIncidents.map((incident) => (
          <Box
            key={incident.id}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={getCategoryColor(incident.category)}
            borderLeftWidth="4px"
            display="flex"
            gap={4}
          >
            <Box
              p={3}
              bg="red.50"
              borderRadius="md"
              minW="120px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              minH={`${Math.min(100, Math.max(20, incident.riskScoreImpact.overall * 2))}px`}
            >
              <VStack spacing={0}>
                <Text fontSize="lg" fontWeight="bold" color="red.700">
                  {incident.riskScoreImpact.overall}
                </Text>
              </VStack>
            </Box>
            <VStack align="stretch" spacing={2} flex={1}>
              <HStack justify="space-between">
                <Text fontWeight="bold">{incident.title}</Text>
                <Badge
                  bg={getSeverityColor(incident.severity)}
                  color="white"
                >
                  {incident.severity}
                </Badge>
              </HStack>
              <Text fontSize="sm" color="gray.500">
                {new Date(incident.date).toLocaleDateString()}
              </Text>
              <Text>{incident.description}</Text>
              <Text fontSize="sm">
                <strong>Detailed Description:</strong> {incident.detailedDescription}
              </Text>
              <Text fontSize="sm">
                <strong>Location:</strong> {incident.location}
              </Text>
              <Text fontSize="sm">
                <strong>Category:</strong> {getCategoryName(incident.category)}
              </Text>
              <Text fontSize="sm">
                <strong>Subcategory:</strong> {getSubcategoryName(incident.category, incident.subcategory)}
              </Text>
              <Box>
                <Text fontSize="sm" fontWeight="bold" mb={1}>Risk Score Impact:</Text>
                <HStack spacing={4}>
                  <Text fontSize="sm">
                    <strong>Overall:</strong> {incident.riskScoreImpact.overall}
                  </Text>
                  <Text fontSize="sm">
                    <strong>Environmental:</strong> {incident.riskScoreImpact.environmental}
                  </Text>
                  <Text fontSize="sm">
                    <strong>Social:</strong> {incident.riskScoreImpact.social}
                  </Text>
                  <Text fontSize="sm">
                    <strong>Governance:</strong> {incident.riskScoreImpact.governance}
                  </Text>
                </HStack>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="bold" mb={1}>Sources:</Text>
                <VStack align="start" spacing={1}>
                  {incident.sources.map((source, index) => (
                    <Text key={index} fontSize="sm">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#3182CE', textDecoration: 'underline' }}
                      >
                        {source.title}
                      </a>
                      {' '}({new Date(source.publishDate).toLocaleDateString()})
                    </Text>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

export default CriticalIncidents 