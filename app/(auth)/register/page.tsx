import { ROUTES } from '@/models/enums'
import Register from '@/modules/register'
import { getSessionServer } from '@/utils/getSessionServer'
import { redirect } from 'next/navigation'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
  title: 'ثبت نام',
}

const Page = () => {
  return <Register />
}

export default Page
