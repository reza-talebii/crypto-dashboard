'use client'

import React from 'react'
import { FormRegisterWrapper, RegisterWrapper } from './styles'
import { Col } from 'antd'
import RegisterBanner from './components/Banner'
import { RegisterProvider } from './context'
import HeaderTitleRegister from './components/HeaderTitle'
import StepRender from './components/StepRender'
import { useMediaQuery } from '@/hook/screen/useMediaQuery '

const Register = () => {
  return (
    <RegisterWrapper>
      <RegisterProvider>
        <Col md={7} span={24}>
          <RegisterBanner />
        </Col>

        <FormRegisterWrapper md={17} span={24}>
          <HeaderTitleRegister />

          <StepRender />
        </FormRegisterWrapper>
      </RegisterProvider>
    </RegisterWrapper>
  )
}

export default Register
