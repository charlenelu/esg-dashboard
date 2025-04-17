'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { increment, decrement, incrementByAmount } from './counterSlice'
import { Button, Text, VStack } from '@chakra-ui/react'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <VStack spacing={4}>
      <Text fontSize="2xl">Count: {count}</Text>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</Button>
    </VStack>
  )
} 