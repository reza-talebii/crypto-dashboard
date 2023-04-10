import { IUser } from '@/models/interfaces'
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: IUser
  }
}
