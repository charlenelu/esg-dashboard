'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, VStack, Text, HStack, Spinner, Alert, AlertIcon, Badge } from '@chakra-ui/react'
import { fetchSeverityLevels, selectSeverityLevels } from './severityLevelsSlice'
import { AppDispatch } from '../../store'

const SeverityLevels = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, error } = useSelector(selectSeverityLevels)

  useEffect(() => {
    dispatch(fetchSeverityLevels())
  }, [dispatch])

  if (loading) {
    return (
      <Box p={4} textAlign="center">
        <Spinner />
      </Box>
    )
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    )
  }

  if (!data?.severityLevels || data.severityLevels.length === 0) {
    return (
      <Box p={4}>
        <Text>No severity levels found</Text>
      </Box>
    )
  }

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">
          Severity Levels
        </Text>
        {data.severityLevels.map((level) => (
          <Box
            key={level.id}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.200"
          >
            <VStack align="stretch" spacing={2}>
              <HStack>
                <Text fontWeight="bold">{level.name}</Text>
                <Badge colorScheme={level.color}>
                  {level.id}
                </Badge>
              </HStack>
              <Text fontSize="sm" color="gray.600">
                {level.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

export default SeverityLevels 