'use client'

import React from 'react'
import { WalletWrapper } from './styles'
import PieChart from '@/components/Charts/Pie'
import { Badge, Col, List, Typography } from 'antd'
import { useGetAssets } from '@/hook/data'

const Wallet = () => {
  const { data } = useGetAssets()

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
                <List.Item.Meta
                  avatar={<Badge dot color={item.color} />}
                  title={<strong>{item.name}</strong>}
                  description={item.percent + ' درصد '}
                />
              </List.Item>
            )}
          />
        </section>
      </Col>

      <Col span={12}>{data && <PieChart data={data} />}</Col>
    </WalletWrapper>
  )
}

export default Wallet
