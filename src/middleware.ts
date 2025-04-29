import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { Role } from './features/auth/constants/roles';

// Public routes that don't require authentication
const publicRoutes = ['/login', '/register', '/blackbox'];

// This will be printed when the middleware file is loaded
console.log('🔄 Middleware file is being loaded');

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check for token
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verify token
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    // Check role-based access using only the token data
    const userRole = payload.roleId as number;
    if (pathname.startsWith('/admin') && userRole !== Role.Admin) {
      return NextResponse.redirect(new URL('/no-permissions', request.url));
    }

    return NextResponse.next();
  } catch {
    // Clear invalid token
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token');
    return response;
  }
}

// Match all paths except static files
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
  ]
}; 