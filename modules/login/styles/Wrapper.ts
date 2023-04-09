import { Row } from 'antd'
import { styled } from 'styled-components'

export const LoginLayoutStyled = styled(Row)`
  max-width: 1376px;
  min-height: calc(100vh - 24px);
  height: 100%;

  @media (max-width: 767px) {
    gap: 1rem;
  }
`
