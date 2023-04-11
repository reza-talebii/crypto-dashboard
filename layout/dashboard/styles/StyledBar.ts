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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0px;

  &.ant-layout-sider-collapsed .ant-menu-title-content {
    display: none;
  }

  .title {
    font-weight: 900;
    font-size: 16px !important;
    line-height: 25px;
    text-align: center;
  }

  .ant-layout-sider-children {
    width: 100%;
  }
`
