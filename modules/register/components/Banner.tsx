'use client'

import React from 'react'
import { BannerRegisterStyled } from '../styles/Banner'
import ImageUi from '@/components/UI/image'
import { Steps, Typography } from 'antd'
import { StepsRegisterStyled } from '../styles'
import { useRegisterCtx } from '../context'
import { useMediaQuery } from '@/hook/screen/useMediaQuery '

const RegisterBanner = () => {
  const isDesktop = useMediaQuery(768)

  const {
    states: { activeStep },
  } = useRegisterCtx()

  return (
    <BannerRegisterStyled>
      <ImageUi src="/assets/images/common/logo.svg" alt="logo" height="94px" width="101px" />

      <Typography.Title className="title" level={2}>
        ثبت نام
      </Typography.Title>

      <StepsRegisterStyled
        direction={isDesktop ? `vertical` : 'horizontal'}
        current={activeStep}
        items={[
          {
            title: 'اطلاعات فردی',
          },
          {
            title: 'اطلاعات ارتباطی',
          },
          {
            title: 'اطلاعات مکانی',
          },
        ]}
      />
    </BannerRegisterStyled>
  )
}

export default RegisterBanner
