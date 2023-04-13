import { ROUTES } from '@/models/enums'
import { redirect } from 'next/navigation'
import { getSessionServer } from '@/utils/auth/getSessionServer'

export default async function Home() {
  const user = await getSessionServer()

  redirect(user ? ROUTES.dashboard : ROUTES.login)
}
