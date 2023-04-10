'use client'

import React, { FC } from 'react'
import { IChildrenProps } from '@/models/interfaces'
import { Layout } from 'antd'
import { DashboardLayoutWrapper } from './styles/Wrapper'
import HeaderUi from './components/Header'
import SideBarUi from './components/SideBar'

const { Content } = Layout

const DashboardLayout: FC<IChildrenProps> = ({ children }) => {
  return (
    <DashboardLayoutWrapper>
      <SideBarUi />
      <Layout>
        <HeaderUi />
        <Content className="!bg-[#E8F4FF]">{children}</Content>
      </Layout>
    </DashboardLayoutWrapper>
  )
}

export default DashboardLayout
