'use client'

import TradingviewChart from '@/modules/tradingviewChart'
import Wallet from '@/modules/wallet'
import { Row } from 'antd'
import React from 'react'

const Page = () => {
  return (
    <Row className="p-1">
      <Wallet />
      {/* <TradingviewChart /> */}
    </Row>
  )
}

export default Page
