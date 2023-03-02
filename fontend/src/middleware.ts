import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
    const { cookies } = req
    const token = cookies.get('user-token')?.name || 'token';
    if (req.nextUrl.pathname.startsWith('/') && !token){
        return NextResponse.redirect(new URL('/login', req.url))
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '//:path*',
}

export default middleware