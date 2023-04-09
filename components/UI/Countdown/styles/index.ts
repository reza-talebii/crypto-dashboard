import styled from 'styled-components'
import { Statistic } from 'antd'

const { Countdown } = Statistic

export const CountdownStyled = styled(Countdown)`
  .ant-statistic-content-value {
    color: ${props => props.theme.colors.warning};
    font-size: 12px;
  }
`
