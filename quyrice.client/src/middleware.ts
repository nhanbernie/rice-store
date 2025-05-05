import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AUTH_ROUTES, PROTECTED_ROUTES } from './common/constants/routes/routes.constant'

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('user')?.value
  const isAuthenticated = !!currentUser
  const isAdmin = currentUser ? JSON.parse(currentUser).role === 'admin' : false
  const pathname = request.nextUrl.pathname

  // Redirect to home
  if (
    isAuthenticated &&
    AUTH_ROUTES.includes(pathname as '/login' | '/register' | '/forgot-password')
  ) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Admin routes
  if (PROTECTED_ROUTES.includes(pathname as '/products-management')) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    if (!isAdmin) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public).*)'],
}
