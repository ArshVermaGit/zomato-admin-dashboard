import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('admin_token')?.value;
    const isAuthPage = request.nextUrl.pathname.startsWith('/login');
    const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard') ||
        request.nextUrl.pathname === '/';

    // If user is accessing dashboard without token => redirect to login
    if (isDashboardPage && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // If user is accessing login with token => redirect to dashboard
    if (isAuthPage && token) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/login', '/dashboard/:path*', '/orders/:path*', '/restaurants/:path*', '/users/:path*', '/payments/:path*', '/analytics/:path*', '/support/:path*', '/settings/:path*'],
};
