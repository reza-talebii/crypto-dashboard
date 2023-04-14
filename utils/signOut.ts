'use client'

import { ROUTES } from '@/models/enums'
import { signOut } from 'next-auth/react'

export const signOutHandler = () => signOut({ callbackUrl: ROUTES.login })
