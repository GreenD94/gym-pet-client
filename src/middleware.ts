import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { Role } from './features/database/types/role';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

// Define public routes that don't require authentication
const publicRoutes = ['/login', '/blackbox', '/'];

// Define role-based route prefixes
const roleRoutes: Record<Role, string> = {
  [Role.Admin]: '/admin',
  [Role.Trainer]: '/trainer',
  [Role.Consumer]: '/consumer',
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Get token from cookies
  const token = request.cookies.get('token')?.value;

  // If no token and not a public route, redirect to login
  if (!token) {
    const url = new URL('/login', request.url);
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }

  try {
    // Verify token
    const { payload } = await jwtVerify(token, JWT_SECRET);
    const roleId = payload.roleId as Role;

    // Check if user has access to the requested route
    const hasAccess = Object.entries(roleRoutes).some(([role, prefix]) => {
      const roleNum = Number(role) as Role;
      return roleId === roleNum && pathname.startsWith(prefix);
    });

    // If user doesn't have access, redirect to their role's home
    if (!hasAccess) {
      const homeRoute = roleRoutes[roleId] || '/';
      return NextResponse.redirect(new URL(homeRoute, request.url));
    }

    // Add user info to request headers for use in API routes
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', payload.userId as string);
    requestHeaders.set('x-user-role', roleId.toString());

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch {
    // If token is invalid, clear it and redirect to login
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token');
    return response;
  }
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}; 