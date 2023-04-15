import Login from '@/modules/login'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
  title: 'ورود',
}

const Page = () => {
  return <Login />
}

export default Page
