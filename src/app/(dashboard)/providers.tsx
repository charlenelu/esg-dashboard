'use client'

import { Provider } from 'react-redux'
import { store } from '@/store'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </Provider>
  )
} 