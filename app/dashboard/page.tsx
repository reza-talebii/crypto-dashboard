'use client'

import Coins from '@/modules/coins'
import PopularCoins from '@/modules/popularCoins'
import TradingviewChart from '@/modules/tradingviewChart'
import TransactionValue from '@/modules/transactionValue'
import Wallet from '@/modules/wallet'
import { Col, Row, Space } from 'antd'
import React from 'react'

const Page = () => {
  return (
    <Row gutter={[16, 16]}>
      {/* <Col span={24}>
        <Coins />
      </Col>
      <Col span={24} lg={18} className="gap-3 flex flex-col">
        <section className="w-full flex gap-3 max-md:flex-col">
          <Wallet />
          <TransactionValue />
        </section>
        <TradingviewChart />
      </Col>

      <Col span={24} lg={6}>
        <PopularCoins />
      </Col> */}
    </Row>
  )
}

export default Page
