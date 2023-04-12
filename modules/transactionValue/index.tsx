'use client'

import React from 'react'
import { TransactionValueWrapper } from './styles'
import { Typography } from 'antd'
import { BarChart } from '@/components/Charts/Bar'

const TransactionValue = () => {
  return (
    <TransactionValueWrapper>
      <Typography.Title level={5}>ارزش معاملات هفته گذشته</Typography.Title>
      <section className="w-full h-full">
        <BarChart />
      </section>
    </TransactionValueWrapper>
  )
}

export default TransactionValue
