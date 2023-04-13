import React from 'react'
import { PopularCoinsWrapper } from './styles'
import { Avatar, List, Select, Space, Typography } from 'antd'
import { timeSelectOptions } from './constants'
import { useGetCoins } from '@/hook/data/useGetCoins'
import ButtonUi from '@/components/UI/Button'

const PopularCoins = () => {
  const [time, setTime] = React.useState<string>('7d')
  const [perPage, setPerPage] = React.useState<number>(10)

  const { data, isLoading } = useGetCoins({
    params: {
      vs_currency: 'usd',
      order: 'circulating_supply',
      per_page: perPage,
      page: 1,
      price_change_percentage: time,
    },
  })

  return (
    <PopularCoinsWrapper>
      <section className="header">
        <Typography.Title level={5}>محبوب‌ترین ارز ها</Typography.Title>
        <Select onChange={value => setTime(value)} value={time} options={timeSelectOptions} className="timeSelect" />
      </section>

      <section className="header">
        <Typography.Text className="listHeader">نام</Typography.Text>
        <Typography.Text className="listHeader">24 ساعت گذشته</Typography.Text>
      </section>

      <List
        className="listCoins"
        itemLayout="horizontal"
        dataSource={data}
        loading={isLoading}
        loadMore={
          <ButtonUi disabled={isLoading} size="small" className="mx-auto " type="text" onClick={() => setPerPage(prev => prev + 10)}>
            بیشتر ...
          </ButtonUi>
        }
        renderItem={(item, index) => (
          <List.Item key={index}>
            <Space size={4}>
              <List.Item.Meta avatar={<Avatar src={item.image} />} />
              <Space>
                <Typography.Text className="coinName">{item.name}</Typography.Text>
                <Typography.Text className="coinSymbol">{item.symbol} </Typography.Text>
              </Space>
            </Space>

            <span className={!!item.price_change_percentage_24h ? 'up' : 'down'}>{item.price_change_percentage_24h.toFixed(2)} % </span>
          </List.Item>
        )}
      />
    </PopularCoinsWrapper>
  )
}

export default PopularCoins
