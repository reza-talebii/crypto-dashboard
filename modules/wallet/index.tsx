'use client'

import React from 'react'
import { WalletWrapper } from './styles'
import PieChart from '@/components/Charts/Pie'
import { Badge, Col, List, Typography } from 'antd'

const data = [
  {
    id: 'btc',
    label: 'btc',
    value: 3000,
    color: 'hsl(271, 70%, 50%)',
  },
  {
    id: 'Eth',
    label: 'Eth',
    value: 1900,
    color: 'hsl(177, 70%, 50%)',
  },
  {
    id: 'usdt',
    label: 'usdt',
    value: 5422,
    color: 'hsl(242, 70%, 50%)',
  },
]

const Wallet = () => {
  return (
    <WalletWrapper>
      <Col span={12}>
        <section className="infoWallet">
          <Typography.Title level={5}>دارایی‌های کیف پول</Typography.Title>
          <List
            className="listWallet"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <List.Item.Meta avatar={<Badge dot color={item.color} />} title={<strong>{item.label}</strong>} description="45 درصد" />
              </List.Item>
            )}
          />
        </section>
      </Col>

      <Col span={12}>
        <PieChart data={data} />
      </Col>
    </WalletWrapper>
  )
}

export default Wallet
