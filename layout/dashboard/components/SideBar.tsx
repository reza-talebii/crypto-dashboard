import React from 'react'
import { StyledBar } from '../styles/StyledBar'
import ImageUi from '@/components/UI/Image'
import { Divider, Typography } from 'antd'
import SideBarDashboardMenu from './Menu'
import Link from 'next/link'
import { ROUTES } from '@/models/enums'

const SideBarUi = () => {
  return (
    <StyledBar collapsed>
      <Link href={ROUTES.dashboard}>
        <ImageUi src="/assets/images/common/logo.svg" className="mx-auto" alt="logo" width="58px" height="54px" />
      </Link>
      <Typography.Title className="title" level={1}>
        نیوکوین اسپیس
      </Typography.Title>

      <Divider className="!min-w-[80%] w-[80%] mx-auto" />

      <SideBarDashboardMenu />
    </StyledBar>
  )
}

export default SideBarUi
