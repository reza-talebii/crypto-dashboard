import React from 'react'
import { StyledBar } from '../styles/StyledBar'
import ImageUi from '@/components/UI/Image'
import { Divider, Typography } from 'antd'
import SideBarDashboardMenu from './Menu'

const SideBarUi = () => {
  return (
    <StyledBar>
      <ImageUi src="/assets/images/common/logo.svg" className="mx-auto" alt="logo" width="58px" height="54px" />
      <Typography.Title className="title" level={1}>
        نیوکوین اسپیس
      </Typography.Title>

      <Divider className="!min-w-[80%] w-[80%] mx-auto" />

      <SideBarDashboardMenu />
    </StyledBar>
  )
}

export default SideBarUi
