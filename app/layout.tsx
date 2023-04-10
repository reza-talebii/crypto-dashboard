import 'antd/dist/reset.css'
import '@/styles/globals.css'

import { Metadata } from 'next'
import localFont from 'next/font/local'
import ConfigProviders from './ConfigProviders'
import { IChildrenProps } from '@/models/interfaces'
import MainLayout from '@/layout/main'

export const metadata: Metadata = {
  title: {
    default: 'نیوکوین اسپیس',
    template: '%s | نیوکوین اسپیس',
  },
  description: 'crypto dashboard',
}

const font = localFont({
  src: '../public/assets/fonts/Yekan-Bakh-FaNum.ttf',
  variable: '--font-Yekan-Bakh-FaNum',
})

export default function RootLayout({ children }: IChildrenProps) {
  return (
    <html lang="en">
      <body className={`${font.variable} font-sans`}>
        <ConfigProviders>
          <MainLayout>{children}</MainLayout>
        </ConfigProviders>
      </body>
    </html>
  )
}
