'use client'

import { axiosInstance } from '@/services/axiosInstance'
import { signOutHandler } from '@/utils/signOut'

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
