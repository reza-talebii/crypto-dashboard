import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/login') || (req.nextUrl.pathname.startsWith('/register') && !req.nextauth.token)) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
)

export const config = {
  matcher: ['/((?!register|api|login).*)'],
}
