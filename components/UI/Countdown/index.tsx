import React, { FC, useState } from 'react'
import { CountdownStyled } from './styles'
import { CountdownProps } from 'antd/es/statistic/Countdown'
import { countdownValueType } from 'antd/es/statistic/utils'

interface IProps extends CountdownProps {
  timer?: countdownValueType
}

const CountdownUi: FC<IProps> = ({ timer = Date.now() + 10 * 12000, ...props }) => {
  const [seconds, setSeconds] = useState<number>(+timer)

  React.useEffect(() => {
    seconds > 0 || setTimeout(() => setSeconds(+seconds - 1), 1000)
  })

  return <CountdownStyled {...props} value={seconds} format="mm:ss" />
}

export default CountdownUi
