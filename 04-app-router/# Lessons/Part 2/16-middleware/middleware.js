import { NextResponse } from 'next/server'

// must be named "middleware"
export function middleware(request) {
  console.log(request)
  return NextResponse.next()
}

export const config = {
  matcher: '/news', // filter requests that go through this middleware
}
