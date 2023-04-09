import React from 'react'
import { BannerRegisterStyled } from '../styles/Banner'
import ImageUi from '@/components/UI/Image'
import { Steps, Typography } from 'antd'

const RegisterBanner = () => {
  return (
    <BannerRegisterStyled>
      <ImageUi src="/assets/images/common/logo.svg" alt="logo" height="94px" width="101px" />

      <Typography.Title className="title" level={2}>
        ثبت نام
      </Typography.Title>

      <Steps
        direction="vertical"
        current={2}
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
