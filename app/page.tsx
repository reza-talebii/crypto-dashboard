import { ROUTES } from '@/models/enums/ROUTES'
import { redirect } from 'next/navigation'
import { getSessionServer } from '@/utils/getSessionServer'

export default async function Home() {
  const user = await getSessionServer()

  redirect(user ? ROUTES.dashboard : ROUTES.login)
}
