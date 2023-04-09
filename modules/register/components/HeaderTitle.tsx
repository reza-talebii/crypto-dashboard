'use client'

import { Typography } from 'antd'
import React from 'react'
import { useRegisterCtx } from '../context'

const HeaderTitleRegister = () => {
  const {
    states: { activeStep },
  } = useRegisterCtx()

  return (
    <section className="headerTitle">
      <Typography.Title level={5} className="headerTitle__step">
        مرحله {activeStep + 1} از 3
      </Typography.Title>
      <Typography.Title level={4} className="headerTitle__sub">
        لطفا اطلاعات خود را با دقت وارد نمائید
      </Typography.Title>
    </section>
  )
}

export default HeaderTitleRegister
