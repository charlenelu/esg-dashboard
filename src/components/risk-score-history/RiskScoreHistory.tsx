'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, VStack, Text, Spinner, Alert, AlertIcon } from '@chakra-ui/react'
import ReactECharts from 'echarts-for-react'
import { fetchRiskScoreHistory, selectRiskScoreHistory } from './riskScoreHistorySlice'
import { selectESGCategories } from '../esg-categories/esgCategoriesSlice'
import { AppDispatch } from '../../store'

const RiskScoreHistory = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, error } = useSelector(selectRiskScoreHistory)
  const { data: esgCategories } = useSelector(selectESGCategories)

  useEffect(() => {
    dispatch(fetchRiskScoreHistory())
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

  if (!data?.data || data.data.length === 0) {
    return (
      <Box p={4}>
        <Text>No risk score history found</Text>
      </Box>
    )
  }

  const getCategoryColor = (categoryId: string) => {
    const category = esgCategories?.categories.find(
      (cat) => cat.id.toLowerCase() === categoryId.toLowerCase()
    )
    return category?.color || '#9C27B0' // default to governance color if not found
  }

  const option = {
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        const date = params[0].name
        const scores = params.map((param: any) => `${param.seriesName}: ${param.value}`).join('<br/>')
        return `${date}<br/>${scores}`
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '3%',
      top: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: data.data.map(item => item.date),
      axisLabel: {
        formatter: (value: string) => {
          return new Date(value).toLocaleDateString()
        }
      }
    },
    yAxis: {
      type: 'value',
      name: 'Risk Score',
      scale: true,
      splitNumber: 2
    },
    series: [
      {
        name: 'Overall',
        type: 'line',
        data: data.data.map(item => item.overall),
        smooth: true,
        lineStyle: {
          width: 3
        },
        itemStyle: {
          color: '#FF9800'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(255, 152, 0, 0.3)'
            }, {
              offset: 1,
              color: 'rgba(255, 152, 0, 0.1)'
            }]
          }
        }
      },
      {
        name: 'Environmental',
        type: 'line',
        data: data.data.map(item => item.environmental),
        smooth: true,
        lineStyle: {
          width: 1
        },
        itemStyle: {
          color: getCategoryColor('environmental')
        }
      },
      {
        name: 'Social',
        type: 'line',
        data: data.data.map(item => item.social),
        smooth: true,
        lineStyle: {
          width: 1
        },
        itemStyle: {
          color: getCategoryColor('social')
        }
      },
      {
        name: 'Governance',
        type: 'line',
        data: data.data.map(item => item.governance),
        smooth: true,
        lineStyle: {
          width: 1
        },
        itemStyle: {
          color: getCategoryColor('governance')
        }
      }
    ]
  }

  return (
    <Box>
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">
          Risk Score History (Interval: {data.interval})
        </Text>

        <ReactECharts option={option} style={{ height: '200px' }} />
      </VStack>
    </Box>
  )
}

export default RiskScoreHistory 