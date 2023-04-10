'use client'

import React from 'react'
import { FormRegisterWrapper, RegisterWrapper } from './styles'
import { Col } from 'antd'
import RegisterBanner from './components/Banner'
import { RegisterProvider } from './context'
import HeaderTitleRegister from './components/HeaderTitle'
import StepRender from './components/StepRender'

const Register = () => {
  return (
    <RegisterWrapper>
      <RegisterProvider>
        <Col span={7}>
          <RegisterBanner />
        </Col>

        <FormRegisterWrapper span={17}>
          <HeaderTitleRegister />

          <StepRender />
        </FormRegisterWrapper>
      </RegisterProvider>
    </RegisterWrapper>
  )
}

export default Register
