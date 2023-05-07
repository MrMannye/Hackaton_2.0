import { useWallet } from '@solana/wallet-adapter-react';
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {

    const { wallet } = useWallet();

    if(req.nextUrl.pathname !== '/') {
        if(!wallet) return NextResponse.redirect(new URL("/", req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/hola"],
}