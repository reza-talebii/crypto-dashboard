import { IUser, TemplateAuthResponse } from '@/models/interfaces'
import { AuthUrls } from '@/services/controllers/auth/urls'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        const url = process.env.NEXT_PUBLIC_Auth_URL_API + AuthUrls.login

        const res = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = (await res.json()) as TemplateAuthResponse<IUser>

        if (data.status !== 200) {
          return null
        }

        return data.result as any
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user }
    },
    session: async ({ session, token }) => {
      session.user = token as any
      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
