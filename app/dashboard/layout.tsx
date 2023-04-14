import { Metadata } from 'next'
import { IChildrenProps } from '@/models/interfaces'
import DashboardLayout from '@/layout/dashboard'
import { getSessionServer } from '@/utils/getSessionServer'
import { redirect } from 'next/navigation'
import { ROUTES } from '@/models/enums'

export const metadata: Metadata = {
  title: 'پنل کاربری',
}

export default async function Layout({ children }: IChildrenProps) {
  return <DashboardLayout>{children}</DashboardLayout>
}
