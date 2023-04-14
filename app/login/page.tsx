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
  return <Login />
}

export default Page
