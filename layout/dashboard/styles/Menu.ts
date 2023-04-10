import { Menu } from 'antd'
import { styled } from 'styled-components'

export const MenuDashboardStyled = styled(Menu)`
  background: transparent;

  .ant-menu-item {
    gap: 7px;
    height: 49px;
    border-radius: 16px;
    display: flex;
    align-items: center;
  }

  .logOut {
    color: #ea3838 !important;
  }

  .ant-menu-title-content {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
  }

  .ant-menu-item:hover {
    background-color: #f0f9ff !important;
  }

  .ant-menu-item-selected,
  .ant-menu-item-selected:hover {
    background-color: #388aea !important;
    svg {
      color: #fff !important;
    }

    .ant-menu-title-content {
      color: #fff !important;
    }
  }
`
