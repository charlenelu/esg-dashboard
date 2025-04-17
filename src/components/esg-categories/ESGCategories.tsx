'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, VStack, Text, HStack, Spinner, Alert, AlertIcon, Badge } from '@chakra-ui/react'
import { fetchESGCategories, selectESGCategories } from './esgCategoriesSlice'
import { AppDispatch } from '../../store'

const ESGCategories = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, error } = useSelector(selectESGCategories)

  useEffect(() => {
    dispatch(fetchESGCategories())
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

  if (!data?.categories || data.categories.length === 0) {
    return (
      <Box p={4}>
        <Text>No ESG categories found</Text>
      </Box>
    )
  }

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">
          ESG Categories
        </Text>
        {data.categories.map((category) => (
          <Box
            key={category.id}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.200"
          >
            <VStack align="stretch" spacing={2}>
              <HStack>
                <Text fontWeight="bold">{category.name}</Text>
                <Badge colorScheme={category.color}>
                  {category.id}
                </Badge>
              </HStack>
              <Text fontSize="sm" color="gray.600">
                {category.description}
              </Text>
              <Box>
                <Text fontSize="sm" fontWeight="bold">Subcategories:</Text>
                <HStack spacing={2} wrap="wrap">
                  {category.subcategories.map((subcategory) => (
                    <Badge key={subcategory.id} colorScheme="gray">
                      {subcategory.name}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

export default ESGCategories 