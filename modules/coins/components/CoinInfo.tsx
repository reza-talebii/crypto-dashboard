'use client'

import React from 'react'
import { CoinInfoWrapper } from '../styles'
import { Avatar, Typography } from 'antd'
import { currencyFormatter } from '@/utils/currencyFormatter'

const data = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 30294,
    market_cap: 586063840820,
    market_cap_rank: 1,
    fully_diluted_valuation: 636228783814,
    total_volume: 17174068105,
    high_24h: 30532,
    low_24h: 29909,
    price_change_24h: 174.05,
    price_change_percentage_24h: 0.57785,
    market_cap_change_24h: 3366492753,
    market_cap_change_percentage_24h: 0.57774,
    circulating_supply: 19344206,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -56.12034,
    ath_date: '2021-11-10T14:24:11.849Z',
    atl: 67.81,
    atl_change_percentage: 44579.33276,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2023-04-12T13:07:55.675Z',
    price_change_percentage_7d_in_currency: 7.521231212132973,
  },
]

const CoinInfo = () => {
  return (
    <CoinInfoWrapper>
      <section className="info">
        <section className="title">
          <Avatar src={data[0].image} />
          <section>
            <Typography.Title level={5}>{data[0].name}</Typography.Title>
            <Typography.Text>{data[0].symbol}</Typography.Text>
          </section>
        </section>

        <section className="flex flex-col items-end">
          <Typography.Text className={`${!!data[0].price_change_percentage_24h ? `up` : `down`}  font-semibold`}>
            {data[0].price_change_percentage_24h.toFixed()} %
          </Typography.Text>
          <Typography.Text className="font-semibold">{currencyFormatter(data[0].current_price)} دلار</Typography.Text>
        </section>
      </section>

      <section>chart</section>
    </CoinInfoWrapper>
  )
}

export default CoinInfo
