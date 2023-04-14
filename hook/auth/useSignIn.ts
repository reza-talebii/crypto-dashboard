'use client'

import { message } from 'antd'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useSignIn = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const signInHandler = async (email: string, password: string, callbackUrl: string) => {
    setLoading(true)

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
        callbackUrl,
      })

      if (res?.ok) {
        router.push(callbackUrl)
        message.success('ورود با موفقیت انجام شد در حال انتقال به پنل ...')
      }
      res?.error && message.error('خطایی در ارتباط با سرور رخ داده است')
    } finally {
      setLoading(false)
    }
  }

  return {
    signInHandler,
    loading,
  }
}
