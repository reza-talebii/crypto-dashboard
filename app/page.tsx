import { ROUTES } from '@/models/enums'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const data = await getServerSession()

  redirect(data ? ROUTES.dashboard : ROUTES.login)
}
