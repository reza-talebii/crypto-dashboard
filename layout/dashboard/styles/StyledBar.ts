import { Layout } from 'antd'
import { styled } from 'styled-components'
const { Sider } = Layout

export const StyledBar = styled(Sider)<{ openMenu: boolean }>`
  background-color: #ffffff !important;
  min-height: calc(100vh - 24px);
  border-radius: 16px !important;

  .ant-layout-sider-children {
    width: 100%;
    height: 100%;
    background-color: #ffffff !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0px;
    border-radius: 16px !important;
  }
  &.ant-layout-sider-collapsed .ant-menu-title-content {
    display: none;
  }

  .ant-menu {
    width: 100% !important;
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

  @media (max-width: 768px) {
    position: fixed !important;
    top: 0;
    left: 0;
    bottom: 0;
    right: ${props => (!props.openMenu ? `-100%` : `0`)};

    .ant-layout-sider-children {
      transition: all 0.3s ease-in-out;
      position: fixed !important;
      top: 0;
      left: 0;
      bottom: 0;
      right: ${props => (!props.openMenu ? `-100%` : `0`)};
      z-index: 99999;
      max-width: 250px;
    }
  }

  ${props =>
    props.openMenu &&
    `position: fixed !important;
    transition: all 0.3s ease-in-out !important;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5) !important;
    z-index: 99998;
    max-width: 100% !important;
    width: 100% !important;
    height: 100%;
    border-radius: 0 !important;

   `}
`
