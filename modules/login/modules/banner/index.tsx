import React from 'react'
import { BannerLoginWrapper } from './styles/Wrapper'
import { Typography } from 'antd'
import ImageUi from '@/components/UI/Image'

const LoginBanner = () => {
  return (
    <BannerLoginWrapper>
      <Typography.Title className="title" level={1}>
        صرافی ارز دیجیتال نیوکوین اسپیس
      </Typography.Title>
      <Typography.Paragraph className="paragraph">
        خرید و فروش امن بیت‌کوین و ارزهای دیجیتال
        <br />
        به بزرگترین بازار ارز دیجیتال ایران بپیوندید
      </Typography.Paragraph>

      <ImageUi className="mx-auto" src={'/assets/images/login/astronaut.svg'} width="246px" height="100%" alt="astronaut" />
    </BannerLoginWrapper>
  )
}

export default LoginBanner
