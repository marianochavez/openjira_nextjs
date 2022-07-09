import { NextRequest, NextResponse, NextFetchEvent } from 'next/server';

export function middleware(request: NextRequest, event: NextFetchEvent) {

    const id = request.nextUrl.pathname.split('/')[3] || '';
    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

    if (!checkMongoIDRegExp.test(id)) {
        return NextResponse.redirect(
            new URL('/api/error/1', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/api/entries/:id'
}