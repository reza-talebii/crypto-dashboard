import { message } from 'antd'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { axiosInstance } from './axiosInstance'
import { TemplateAuthResponse } from '@/models/interfaces'
import { signOutHandler } from '@/utils/signOut'

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<TemplateAuthResponse<null>>) => {
    if (error.response?.status === 400) {
      if (error?.response?.data?.errors) {
        error?.response?.data?.errors?.forEach(error => {
          message.error(error)
        })

        return
      }

      error?.response?.data?.message ?? message.error(error?.response?.data?.message!)
    }

    if (error?.response?.status === 401) {
      signOutHandler()
    }

    return Promise.reject(error)
  },
)
axiosInstance.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
)

export const apiCaller = {
  get: async <T>(url: string, config?: AxiosRequestConfig<unknown>) => await axiosInstance.get<T>(url, config),
  post: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig<unknown>) => await axiosInstance.post<T>(url, data, config),
  put: async <T>(url: string, data: unknown, config?: AxiosRequestConfig<unknown>) => await axiosInstance.put<T>(url, data, config),
  delete: async <T>(url: string, data?: any) => await axiosInstance.delete<T>(url, data),
}
