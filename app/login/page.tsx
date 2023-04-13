import { ROUTES } from '@/models/enums'
import Login from '@/modules/login'
import { getSessionServer } from '@/utils/auth/getSessionServer'
import { redirect } from 'next/navigation'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
  title: 'ورود',
}

const Page = async () => {
  const data = await getSessionServer()

  if (data) redirect(ROUTES.dashboard)

  return <Login />
}

export default Page
