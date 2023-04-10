'use client'
import { ROUTES } from '@/models/enums'
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOut = () => {
  return <button onClick={() => signOut({ callbackUrl: ROUTES.login, redirect: true })}>SignOut</button>
}

export default SignOut
