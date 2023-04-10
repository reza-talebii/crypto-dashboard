import styled from 'styled-components'
import { Statistic } from 'antd'

const { Countdown } = Statistic

export const CountdownStyled = styled(Countdown)`
  display: inline;
  margin: 0 5px;

  .ant-statistic-content {
    display: inline;
  }

  .ant-statistic-content-value {
    font-size: 13px !important;
  }
`
