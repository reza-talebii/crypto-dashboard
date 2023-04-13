'use client'

import React, { FC } from 'react'
import { CoinInfoWrapper } from '../styles'
import { Avatar, Typography } from 'antd'
import { currencyFormatter } from '@/utils/currencyFormatter'
import { ICoin } from '@/services/controllers/coins/models'
import LineChart from '@/components/Charts/Line'

const CoinInfo: FC<ICoin> = ({ image, name, price_change_percentage_24h, symbol, current_price, sparkline_in_7d }) => {
  return (
    <CoinInfoWrapper>
      <section className="info">
        <section className="title">
          <Avatar src={image} />
          <section>
            <Typography.Title level={5}>{name}</Typography.Title>
            <Typography.Text>{symbol}</Typography.Text>
          </section>
        </section>

        <section className="flex flex-col items-end">
          <Typography.Text className={`${price_change_percentage_24h >= 0 ? `up` : `down`}  font-semibold`}>
            {price_change_percentage_24h.toFixed(3)} %
          </Typography.Text>
          <Typography.Text className="font-semibold">{currencyFormatter(current_price)} دلار</Typography.Text>
        </section>
      </section>

      <section className="w-full">{/* <LineChart {...sparkline_in_7d} /> */}</section>
    </CoinInfoWrapper>
  )
}

export default CoinInfo
