'use client'

import React from 'react'
import { LoginFromStyled } from './styles'
import ImageUi from '@/components/UI/Image'
import { Form, Typography, message } from 'antd'
import Link from 'next/link'
import ButtonUi from '@/components/UI/Button'
import InputUi from '@/components/UI/Input'
import { ROUTES } from '@/models/enums'
import { BsArrowLeft } from '@react-icons/all-files/bs/BsArrowLeft'
import { HiOutlineChatAlt } from '@react-icons/all-files/hi/HiOutlineChatAlt'

import { RiLockPasswordLine } from '@react-icons/all-files/ri/RiLockPasswordLine'
import { z } from 'zod'
import { emailFormRule, passwordFormRule } from '@/utils'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

const FormValueSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(32),
})
type FormValue = z.infer<typeof FormValueSchema>

const LoginForm = () => {
  const callbackUrl = useSearchParams()?.get('callbackUrl') || ROUTES.dashboard
  const [loading, setLoading] = React.useState<boolean>(false)

  const onSubmit = async (values: FormValue) => {
    if (!FormValueSchema.safeParse(values).success) {
      throw new Error('Invalid email or password')
    }

    setLoading(true)

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl,
      })

      res?.error && message.error('خطایی در ارتباط با سرور رخ داده است')
    } finally {
      setLoading(false)
    }
  }
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
