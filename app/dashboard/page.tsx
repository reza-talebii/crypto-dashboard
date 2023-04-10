import { getSessionServer } from '@/utils/getSessionServer'
import React from 'react'

const Page = async () => {
  const user = await getSessionServer()

  return <div>{JSON.stringify(user)}</div>
}

export default Page
