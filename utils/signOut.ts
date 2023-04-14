'use client'

import { ROUTES } from '@/models/enums/ROUTES'
import { signOut } from 'next-auth/react'

export const signOutHandler = () => signOut({ callbackUrl: ROUTES.login, redirect: true })
