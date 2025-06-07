import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Get the path of the request
  const path = request.nextUrl.pathname

  // Define which paths are public and which need authentication
  const isPublicPath = path === '/' || 
                      path === '/browse-designs' || 
                      path === '/showcase' ||
                      path === '/pricing' ||
                      path.startsWith('/squeeze') ||
                      path.startsWith('/auth')

  // Get the session from the cookies
  const hasCookie = request.cookies.has('sb-auth-token')

  // Redirect logic
  if (!isPublicPath && !hasCookie) {
    // Redirect to login if trying to access protected route without auth
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if (path.startsWith('/auth') && hasCookie) {
    // Redirect to dashboard if trying to access auth pages when logged in
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Continue with the request if no redirects were triggered
  return NextResponse.next()
}

// Define which paths this middleware should run on
export const config = {
  matcher: [
    // Match all routes except static files, api routes, and _next
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 