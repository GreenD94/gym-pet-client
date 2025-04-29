import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Role } from './src/features/database/types/role'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const role = request.cookies.get('role')?.value

  // Public routes that don't require authentication
  const publicRoutes = ['/login', '/register', '/', '/blackbox']
  if (publicRoutes.includes(path)) {
    return NextResponse.next()
  }

  // Role-based route protection
  if (path.startsWith('/admin') && role !== Role.Admin.toString()) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (path.startsWith('/trainer') && role !== Role.Trainer.toString()) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (path.startsWith('/consumer') && role !== Role.Consumer.toString()) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 