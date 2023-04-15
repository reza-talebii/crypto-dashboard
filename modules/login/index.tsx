'use client'

import React from 'react'
import { LoginLayoutStyled } from './styles/Wrapper'
import { Col } from 'antd'
import LoginForm from './modules/form'
import LoginBanner from './modules/banner'
import { useSearchParams } from 'next/navigation'
import { useSignIn } from '@/hook/auth'
import { ROUTES } from '@/models/enums'
import { FormValueLogin, FormValueLoginSchema } from './schema'

const Login = () => {
  const callbackUrl = useSearchParams()?.get('callbackUrl') || ROUTES.dashboard
  const { loading, signInHandler } = useSignIn()

  const onSubmit = (values: FormValueLogin) => {
    if (!FormValueLoginSchema.safeParse(values).success) {
      throw new Error('Invalid email or password')
    }

    signInHandler(values.email, values.password, callbackUrl)
  }

  return (
    <LoginLayoutStyled>
      <Col md={{ span: 12, order: 0 }} span={0} order={1}>
        <LoginBanner />
      </Col>
      <Col md={12} span={24}>
        <LoginForm loading={loading} onSubmit={onSubmit} />
      </Col>
    </LoginLayoutStyled>
  )
}

export default Login
