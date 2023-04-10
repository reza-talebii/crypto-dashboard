import { Layout } from 'antd'
import { styled } from 'styled-components'
const { Sider } = Layout

export const StyledBar = styled(Sider)`
  max-width: 250px;
  width: 100%;
  min-height: calc(100vh - 24px);
  height: 100%;
  background-color: #ffffff !important;
  border-radius: 16px !important;
`
