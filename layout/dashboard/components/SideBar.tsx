'use client'

import React from 'react'
import { StyledBar } from '../styles/StyledBar'
import ImageUi from '@/components/UI/Image'
import { Divider, Typography } from 'antd'
import SideBarDashboardMenu from './Menu'
import Link from 'next/link'
import { ROUTES } from '@/models/enums'
import { useLayoutStore } from '@/layout/store'
import { useMediaQuery } from '@/hook/screen/useMediaQuery '

const SideBarUi = () => {
  const isDesktop = useMediaQuery(768)
  const { collapseSidebar, openMenu, toggleOpenMenu } = useLayoutStore()

  const x = !isDesktop ? false : collapseSidebar

  return (
    <StyledBar onClick={() => openMenu && toggleOpenMenu()} collapsed={x} openMenu={openMenu}>
      <Link href={ROUTES.dashboard}>
        <ImageUi src="/assets/images/common/logo.svg" className="mx-auto" alt="logo" width="58px" height="54px" />
      </Link>

      {collapseSidebar || (
        <Typography.Title className="title" level={1}>
          نیوکوین اسپیس
        </Typography.Title>
      )}

      <Divider className="!min-w-[80%] w-[80%] mx-auto" />

      <SideBarDashboardMenu />
    </StyledBar>
  )
}

export default SideBarUi
