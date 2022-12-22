import { NextResponse } from 'next/server'

export function middleware(request) {
    const token = request.cookies.get('token')?.value

    if (['/', '/accounts', '/accounts/add'].includes(request.nextUrl.pathname)) {
        if (token === undefined) {
            if (request.nextUrl.pathname === '/') {
                return NextResponse.rewrite(new URL('/login', request.url))
            }

            return NextResponse.rewrite(new URL('/404', request.url))
        }
    } else if (['/login'].includes(request.nextUrl.pathname)) {
        if (token !== undefined) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }
}

export const config = {
    matcher: [
        '/',
        '/accounts',
        '/accounts/add',
        '/login'
    ],
}