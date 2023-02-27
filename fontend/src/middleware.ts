// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {deserilizeUser} from './middlewares/deserializeUser'
// This function can be marked `async` if using `await` inside
const middleware = async (request: NextRequest) => {
  const auth = await deserilizeUser(request);
  console.log(auth)
  if (auth) {
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL('/login', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '//:path*',
}
export default middleware