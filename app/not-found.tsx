import { ROUTES } from '@/models/enums/ROUTES'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function NotFound() {
  const data = await getServerSession(authOptions)

  return (
    <section className="flex flex-col w-full h-screen justify-center items-center m-auto">
      <h2 className="font-bold !text-5xl">404</h2>
      <p className="text-2xl">صفحه مورد نظر یافت نشد</p>

      <Link className="!text-blue-700" href={data ? ROUTES.dashboard : ROUTES.login}>
        {data ? 'برگشت به پنل کاربری' : 'برگشت به صفحه ورود'}
      </Link>
    </section>
  )
}
