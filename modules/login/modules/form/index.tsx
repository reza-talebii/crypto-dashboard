'use client'

import React, { FC } from 'react'
import { LoginFromStyled } from './styles'
import ImageUi from '@/components/UI/image'
import { Form, Typography, message } from 'antd'
import Link from 'next/link'
import ButtonUi from '@/components/UI/Button'
import InputUi from '@/components/UI/Input'
import { ROUTES } from '@/models/enums'
import { BsArrowLeft } from 'react-icons/bs'
import { HiOutlineChatAlt } from 'react-icons/hi'

import { RiLockPasswordLine } from 'react-icons/ri'
import { emailFormRule, passwordFormRule } from '@/utils'
import { FormValueLogin } from '../../schema'

interface IProps {
  loading: boolean
  onSubmit: (values: FormValueLogin) => void
}

const LoginForm: FC<IProps> = ({ loading, onSubmit }) => {
  return (
    // @ts-ignore
    <LoginFromStyled onFinish={onSubmit}>
      <ImageUi src="/assets/images/common/logo.svg" alt="logo" width="101px" height="94px" />

      <section className="flex justify-center items-center flex-col">
        <Typography.Title className="title" level={3}>
          ورود به داشبورد
        </Typography.Title>

        <Link href={ROUTES.register} className="link">
          هنوز ثبت نام نکرده‌اید؟
        </Link>
      </section>

      <Form.Item name={'email'} rules={emailFormRule}>
        <InputUi label="ایمیل" icon={<HiOutlineChatAlt />} placeholder="example@mail.com" />
      </Form.Item>
      <Form.Item name={'password'} rules={passwordFormRule}>
        <InputUi label="رمز عبور" icon={<RiLockPasswordLine />} placeholder="حداقل 8 کاراکتر" />
      </Form.Item>

      <ButtonUi loading={loading} htmlType="submit" className="btn" icon={<BsArrowLeft />}>
        ورود به حساب
      </ButtonUi>
    </LoginFromStyled>
  )
}

export default LoginForm
