import { styled } from 'styled-components'
import { Layout } from 'antd'

export const MainLayoutStyled = styled(Layout.Content)`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.mainBg};
  padding: 12px 24px;

  @media (max-width: 400px) {
    padding: 0 !important;
  }
`
