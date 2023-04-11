import React from 'react'

import dynamic from 'next/dynamic'
import { TradingViewChartWrapper } from './styled'
const AdvancedRealTimeChart = dynamic(() => import('react-ts-tradingview-widgets').then(w => w.AdvancedRealTimeChart), {
  ssr: false,
})

const TradingviewChart = () => {
  return (
    <TradingViewChartWrapper>
      <AdvancedRealTimeChart autosize symbol={'btc' + 'usd'} theme="light" locale="fa_IR" style={'1'} interval="D"></AdvancedRealTimeChart>
    </TradingViewChartWrapper>
  )
}

export default TradingviewChart
