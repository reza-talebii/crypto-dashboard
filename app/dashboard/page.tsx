'use client'

import PopularCoins from '@/modules/popularCoins'
import TransactionValue from '@/modules/transactionValue'
import Wallet from '@/modules/wallet'
import { Row } from 'antd'
import React from 'react'

const Page = () => {
  return (
    <Row className="p-1">
      <Wallet />
      {/* <TradingviewChart /> */}
      <TransactionValue />
      <PopularCoins />
    </Row>
  )
}

export default Page
