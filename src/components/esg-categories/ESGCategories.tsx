import { Box, VStack, Text, HStack, Badge } from '@chakra-ui/react'
import { esgCategoriesService } from '@/services/esgCategoriesService'

import ESGCategoriesDataReceiver from './ESGCategoriesDataReceiver'
export default async function ESGCategories() {
  const { categories } = await esgCategoriesService.getCategories()

  if (!categories?.length) {
    return (
      <Box p={4}>
        <ESGCategoriesDataReceiver data={categories} />
        <Text>No ESG categories found</Text>
      </Box>
    )
  }

  return (
    
    <Box p={4} suppressHydrationWarning>
      <ESGCategoriesDataReceiver data={categories} />
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">
          ESG Categories
        </Text>
        {categories.map((category) => (
          <Box
            key={category.id}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.200"
            suppressHydrationWarning
          >
            <VStack align="stretch" spacing={2}>
              <HStack>
                <Text fontWeight="bold">{category.name}</Text>
              </HStack>
              <Text fontSize="sm" color="gray.600">
                {category.description}
              </Text>
              <Box>
                <Text fontSize="sm" fontWeight="bold">Subcategories:</Text>
                <HStack spacing={2} wrap="wrap">
                  {category.subcategories.map((subcategory) => (
                    <Badge 
                      key={subcategory.id} 
                      colorScheme="gray"
                      suppressHydrationWarning
                    >
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