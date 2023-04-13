import { ROUTES } from '@/models/enums'
import Register from '@/modules/register'
import { getSessionServer } from '@/utils/auth/getSessionServer'
import { redirect } from 'next/navigation'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
  title: 'ثبت نام',
}

const Page = async () => {
  const data = await getSessionServer()

  if (data) redirect(ROUTES.dashboard)

  return <Register />
}

export default Page
