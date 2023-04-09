'use client'

import React from 'react'
import { LoginLayoutStyled } from './styles/Wrapper'
import { Col } from 'antd'
import LoginForm from './modules/form'
import LoginBanner from './modules/banner'

const Login = () => {
  return (
    <LoginLayoutStyled>
      <Col md={{ span: 12, order: 0 }} span={24} order={1}>
        <LoginBanner />
      </Col>
      <Col md={12} span={24}>
        <LoginForm />
      </Col>
    </LoginLayoutStyled>
  )
}

export default Login
