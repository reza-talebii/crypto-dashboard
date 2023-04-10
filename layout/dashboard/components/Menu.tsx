import { ROUTES } from '@/models/enums'
import React from 'react'
import { MenuDashboardStyled } from '../styles/Menu'
import { HiOutlineHome } from '@react-icons/all-files/hi/HiOutlineHome'
import { RiExchangeBoxLine } from '@react-icons/all-files/ri/RiExchangeBoxLine'
import { MenuProps } from 'antd'
import { signOut } from 'next-auth/react'

type MenuItem = Required<MenuProps>['items']

const items: MenuItem = [
  {
    label: 'داشبورد',
    icon: <HiOutlineHome size={20} />,
    key: ROUTES.dashboard,
  },
  {
    label: 'خرید و فروش',
    icon: <RiExchangeBoxLine size={20} />,
    key: 'exchange',
  },
  {
    label: 'گزارش بازار',
    icon: <RiExchangeBoxLine size={20} />,
    key: 'charts',
  },
  {
    label: 'کیف پول',
    icon: <RiExchangeBoxLine size={20} />,
    key: 'wallet',
  },
  {
    label: 'خروج',
    icon: <RiExchangeBoxLine size={20} />,
    key: ROUTES.home,
    onClick: () => signOut(),
    className: 'logOut',
  },
]

const SideBarDashboardMenu = () => {
  return <MenuDashboardStyled defaultSelectedKeys={[ROUTES.dashboard]} mode={'vertical'} theme={'light'} items={items} />
}

export default SideBarDashboardMenu
