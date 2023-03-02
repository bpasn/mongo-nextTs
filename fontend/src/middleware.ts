import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest, } from 'next/server'

export default withAuth(
    function middleware(req: NextRequest) {
        return NextResponse.redirect(new URL('/', req.url))
    },
    {
        callbacks: {
            authorized: ({ token ,req}) => {
                console.log(token?.email)
                return token ? true : false
            }
        }
    }
)

export const config = {
    matcher: ['/','/admin']
}
