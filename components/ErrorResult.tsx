import { Result, Space } from 'antd'
import React, { FC } from 'react'
import ButtonUiKit from './UI/Button'

interface IProps {
  title: string
  subTitle: string
  tyAgainHandler: () => void
  tyAgainLoading?: boolean
}

const ErrorResult: FC<IProps> = ({ subTitle, title, tyAgainHandler, tyAgainLoading }) => {
  return (
    <Result
      status="error"
      title={title}
      subTitle={subTitle}
      extra={[
        <Space size={10} key="tryAgain">
          <ButtonUiKit loading={tyAgainLoading} type="primary" onClick={tyAgainHandler}>
            امتحان مجدد
          </ButtonUiKit>
        </Space>,
      ]}
    />
  )
}

export default ErrorResult
