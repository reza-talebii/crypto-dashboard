'use client'

import { ROUTES } from '@/models/enums'
import { axiosInstance } from '@/services/axiosInstance'
import { signOutHandler } from '@/utils/auth/signOut'
import { signOut } from 'next-auth/react'

export const useUnauthorized = () => {
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        signOutHandler()
      }
    },
  )
}
