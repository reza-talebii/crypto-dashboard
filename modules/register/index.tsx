'use client'

import React from 'react'
import { FormRegisterWrapper, RegisterWrapper } from './styles'
import { Col, Typography } from 'antd'
import RegisterBanner from './components/Banner'
import ActionsRegister from './components/Actions'

const Register = () => {
  return (
    <RegisterWrapper>
      <Col span={7}>
        <RegisterBanner />
      </Col>
      <FormRegisterWrapper span={17}>
        <section className="headerTitle">
          <Typography.Title level={5} className="headerTitle__step">
            مرحله 2 از 3
          </Typography.Title>
          <Typography.Title level={4} className="headerTitle__sub">
            لطفا اطلاعات خود را با دقت وارد نمائید
          </Typography.Title>
        </section>

        <section>steps</section>

        <ActionsRegister />
      </FormRegisterWrapper>
    </RegisterWrapper>
  )
}

export default Register
