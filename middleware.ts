import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || ''
  
  const path = request.nextUrl.pathname

  // Define paths that are considered public (accessible without a token)
  const isPublicPath = path === '/api/auth/signin' || path === '/api/auth/signup' 
  
  // Get the token from the cookies

  // Redirect logic based on the path and token presence
  if(isPublicPath && token) {

 // If trying to access a public path with a token, redirect to the home page
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
  console.log(token)

// If trying to access a protected path without a token, redirect to the login page
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.nextUrl))
  }
    
}


// It specifies the paths for which this middleware should be executed. 
// In this case, it's applied to '/', '/profile', '/login', and '/signup'.
export const config = {
  matcher: [
    '/',
    // '/profile',
    '/api/auth/signin',
    '/api/auth/signup',
    '/api/booking/all',
    '/dashboard'
  ]
}