'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  Box, 
  Text, 
  Badge, 
  HStack, 
  Spinner, 
  Alert, 
  AlertIcon, 
  Tooltip, 
  VStack, 
  Flex,
  Select,
  SimpleGrid,
  FormControl,
  FormLabel,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { fetchIncidents, selectIncidents } from './incidentsSlice'
import { selectSeverityLevels } from '../severity-levels/severityLevelsSlice'
import { selectESGCategories } from '../esg-categories/esgCategoriesSlice'
import { AppDispatch } from '../../store'
import type { ESGCategory } from '../esg-categories/esgCategoriesSlice'
import type { Incident } from '../../types/incident-type'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const Incidents = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data: incidentsData, loading: incidentsLoading, error: incidentsError } = useSelector(selectIncidents)
  const { data: severityLevelsData } = useSelector(selectSeverityLevels)
  const { data: esgCategoriesData } = useSelector(selectESGCategories)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null)

  // 筛选状态
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [selectedSeverity, setSelectedSeverity] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  useEffect(() => {
    dispatch(fetchIncidents())
  }, [dispatch])

  if (incidentsLoading) {
    return (
      <Box p={4} textAlign="center">
        <Spinner />
      </Box>
    )
  }

  if (incidentsError) {
    return (
      <Alert status="error">
        <AlertIcon />
        {incidentsError}
      </Alert>
    )
  }

  if (!incidentsData?.incidents || incidentsData.incidents.length === 0) {
    return (
      <Box p={4}>
        <Text>No incidents found</Text>
      </Box>
    )
  }

  const getSeverityColor = (severity: string) => {
    const level = severityLevelsData?.severityLevels.find(
      level => level.id.toLowerCase() === severity.toLowerCase()
    )
    return level?.color || '#FBC02D'
  }

  const getCategoryColor = (category: string) => {
    const esgCategory = esgCategoriesData?.categories.find(
      (cat: ESGCategory) => cat.id.toLowerCase() === category.toLowerCase()
    )
    return esgCategory?.color || '#9C27B0'
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

  const resetFilters = () => {
    setStartDate(null)
    setEndDate(null)
    setSelectedSeverity('')
    setSelectedCategory('')
  }

  const handleIncidentClick = (incident: Incident) => {
    setSelectedIncident(incident)
    onOpen()
  }

  // 应用筛选条件
  const filteredIncidents = incidentsData.incidents
    .filter(incident => {
      if (startDate && new Date(incident.date) < startDate) return false
      if (endDate && new Date(incident.date) > endDate) return false
      if (selectedSeverity && incident.severity.toLowerCase() !== selectedSeverity.toLowerCase()) return false
      if (selectedCategory && incident.category.toLowerCase() !== selectedCategory.toLowerCase()) return false
      return true
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Recent Incidents ({filteredIncidents.length})
      </Text>

      {/* 筛选器 */}
      <Box p={4} borderWidth="1px" borderRadius="lg" mb={4}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
          <FormControl>
            <FormLabel>Start Date</FormLabel>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select start date"
              className="chakra-input"
            />
          </FormControl>
          <FormControl>
            <FormLabel>End Date</FormLabel>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select end date"
              className="chakra-input"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Severity</FormLabel>
            <Select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              placeholder="Select severity"
            >
              {severityLevelsData?.severityLevels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              placeholder="Select category"
            >
              {esgCategoriesData?.categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </SimpleGrid>
        <Button mt={4} onClick={resetFilters} colorScheme="blue">
          Reset Filters
        </Button>
      </Box>

      <Box
        position="relative"
        minH="300px"
        overflowX="auto"
        css={{
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
      >
        <Box position="relative">
          {/* Timeline axis */}
          <Box
            position="absolute"
            top="50%"
            left="0"
            right="0"
            height="2px"
            bg="gray.200"
            transform="translateY(-50%)"
          />
          
          <HStack spacing={8} align="center" minH="350px" p={4} overflowX="auto">
            {filteredIncidents.map((incident, index) => (
              <Flex
                key={incident.id}
                direction="column"
                align="center"
                position="relative"
                minW="200px"
                onClick={() => handleIncidentClick(incident)}
                cursor="pointer"
              >
                {/* Timeline dot */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  width="12px"
                  height="12px"
                  borderRadius="full"
                  bg={getSeverityColor(incident.severity)}
                  zIndex={1}
                />
                
                {/* Date marker */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  mt={index % 2 === 0 ? "30px" : "-30px"}
                  fontSize="sm"
                  color="gray.500"
                  whiteSpace="nowrap"
                >
                  {new Date(incident.date).toLocaleDateString()}
                </Box>

                <Tooltip
                  label={
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="bold">{incident.title}</Text>
                      <Text>Date: {new Date(incident.date).toLocaleDateString()}</Text>
                      <Text>Category: {getCategoryName(incident.category)} - {getSubcategoryName(incident.category, incident.subcategory)}</Text>
                      <Text>Severity: {incident.severity}</Text>
                      <Text>Location: {incident.location}</Text>
                      <Text>Description: {incident.description}</Text>
                      <Text>Risk Score Impact: {incident.riskScoreImpact.overall}</Text>
                    </VStack>
                  }
                  placement={index % 2 === 0 ? 'top' : 'bottom'}
                  hasArrow
                >
                  <Box
                    width="100%"
                    minWidth="200px"
                    p={4}
                    borderWidth="1px"
                    borderRadius="lg"
                    borderColor={getCategoryColor(incident.category)}
                    borderLeftWidth="4px"
                    cursor="pointer"
                    _hover={{ transform: 'scale(1.02)', transition: 'transform 0.2s' }}
                    bg="white"
                    position="absolute"
                    top={index % 2 === 0 ? "auto" : "20px"}
                    bottom={index % 2 === 0 ? "20px" : "auto"}
                  >
                    <VStack align="start" spacing={2}>
                      <Text fontWeight="bold" noOfLines={2}>
                        {incident.title}
                      </Text>
                      <Text fontSize="sm" noOfLines={1}>
                        {getCategoryName(incident.category)} - {getSubcategoryName(incident.category, incident.subcategory)}
                      </Text>
                      <Badge
                        bg={getSeverityColor(incident.severity)}
                        color="white"
                      >
                        {incident.severity}
                      </Badge>
                    </VStack>
                  </Box>
                </Tooltip>
              </Flex>
            ))}
          </HStack>
        </Box>
      </Box>

      {/* Incident Details Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          {selectedIncident && (
            <>
              <ModalHeader
                borderBottomWidth="1px"
                borderColor={getCategoryColor(selectedIncident.category)}
                borderLeftWidth="4px"
                bg="white"
                py={4}
              >
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold" fontSize="lg">{selectedIncident.title}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {new Date(selectedIncident.date).toLocaleDateString()}
                  </Text>
                </VStack>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody p={4}>
                <Box
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  borderColor={getCategoryColor(selectedIncident.category)}
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
                    minH={`${Math.min(100, Math.max(20, selectedIncident.riskScoreImpact.overall * 2))}px`}
                  >
                    <VStack spacing={0}>
                      <Text fontSize="lg" fontWeight="bold" color="red.700">
                        {selectedIncident.riskScoreImpact.overall}
                      </Text>
                    </VStack>
                  </Box>
                  <VStack align="stretch" spacing={2} flex={1}>
                    <HStack justify="space-between">
                      <Text fontWeight="bold">{selectedIncident.title}</Text>
                      <Badge
                        bg={getSeverityColor(selectedIncident.severity)}
                        color="white"
                      >
                        {selectedIncident.severity}
                      </Badge>
                    </HStack>
                    <Text fontSize="sm" color="gray.500">
                      {new Date(selectedIncident.date).toLocaleDateString()}
                    </Text>
                    <Text>{selectedIncident.description}</Text>
                    <Text fontSize="sm">
                      <strong>Detailed Description:</strong> {selectedIncident.detailedDescription}
                    </Text>
                    <Text fontSize="sm">
                      <strong>Location:</strong> {selectedIncident.location}
                    </Text>
                    <Text fontSize="sm">
                      <strong>Category:</strong> {getCategoryName(selectedIncident.category)}
                    </Text>
                    <Text fontSize="sm">
                      <strong>Subcategory:</strong> {getSubcategoryName(selectedIncident.category, selectedIncident.subcategory)}
                    </Text>
                    <Box>
                      <Text fontSize="sm" fontWeight="bold" mb={1}>Risk Score Impact:</Text>
                      <HStack spacing={4}>
                        <Text fontSize="sm">
                          <strong>Overall:</strong> {selectedIncident.riskScoreImpact.overall}
                        </Text>
                        <Text fontSize="sm">
                          <strong>Environmental:</strong> {selectedIncident.riskScoreImpact.environmental}
                        </Text>
                        <Text fontSize="sm">
                          <strong>Social:</strong> {selectedIncident.riskScoreImpact.social}
                        </Text>
                        <Text fontSize="sm">
                          <strong>Governance:</strong> {selectedIncident.riskScoreImpact.governance}
                        </Text>
                      </HStack>
                    </Box>
                    {selectedIncident.sources && selectedIncident.sources.length > 0 && (
                      <Box>
                        <Text fontSize="sm" fontWeight="bold" mb={1}>Sources:</Text>
                        <VStack align="start" spacing={1}>
                          {selectedIncident.sources.map((source, index) => (
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
                    )}
                  </VStack>
                </Box>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Incidents 