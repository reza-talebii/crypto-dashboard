import { useGetSession } from '@/hook'
import { ROUTES } from '@/models/enums'
import Login from '@/modules/login'
import { getSessionServer } from '@/utils/getSessionServer'
import { redirect } from 'next/navigation'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
  title: 'ورود',
}

const Page = () => {
  const { user } = useGetSession()

  console.log(user)

  return <Login />
}

export default Page
