import { Metadata } from 'next'
import { IChildrenProps } from '@/models/interfaces'
import DashboardLayout from '@/layout/dashboard'

export const metadata: Metadata = {
  title: 'پنل کاربری',
}

export default function Layout({ children }: IChildrenProps) {
  return <DashboardLayout>{children}</DashboardLayout>
}
