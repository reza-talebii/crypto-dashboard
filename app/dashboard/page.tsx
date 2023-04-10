import { getServerSession } from 'next-auth'
import React from 'react'
import SignOut from './signOut'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const Page = async () => {
  const data = await getServerSession(authOptions)

  return (
    <div>
      {JSON.stringify(data?.user)}

      <SignOut />
    </div>
  )
}

export default Page
