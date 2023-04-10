import { Layout } from 'antd'
import { styled } from 'styled-components'

export const DashboardLayoutWrapper = styled(Layout)`
  display: flex;
  gap: 10px;
  min-height: calc(100vh - 24px);
  background: none !important;

  .ant-layout {
    background: none !important;
  }
`
