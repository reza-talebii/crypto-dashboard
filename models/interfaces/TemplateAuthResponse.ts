export interface TemplateAuthResponse<T> {
  success: boolean
  message: string
  result?: T
  token: string
  errors: []
  status: number
}
