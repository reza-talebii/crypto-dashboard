'use client'

import { ROUTES } from '@/models/enums'
import React from 'react'
import { MenuDashboardStyled } from '../styles/Menu'
import { usePathname } from 'next/navigation'
import { dashboardMenuItems } from '../constants/menuItems'

const SideBarDashboardMenu = () => {
  const pathname = usePathname()

  return (
    <MenuDashboardStyled
      selectedKeys={[pathname || ROUTES.dashboard]}
      defaultSelectedKeys={[ROUTES.dashboard]}
      mode={'vertical'}
      theme={'light'}
      items={dashboardMenuItems}
    />
  )
}

export default SideBarDashboardMenu
