'use client'

import TradingviewChart from '@/modules/tradingviewChart'
import { Row } from 'antd'
import React from 'react'

const Page = () => {
  return (
    <Row className="p-1">
      <TradingviewChart />
    </Row>
  )
}

export default Page
