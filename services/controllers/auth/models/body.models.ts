export interface IBodyRegister {
  name: string
  password: string
  email: string
  password_confirmation: string
}
export interface IBodyLogin {
  password: string
  email: string
}
