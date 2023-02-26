import { RootState } from '@/store/store'
import { NextRequest, NextResponse } from 'next/server'
import { useSelector } from 'react-redux'

export function middleware(request: NextRequest) {

    // const user_publickey = useSelector((state: RootState) => state.user?.wallet?.sol_address);

    if (request.nextUrl.pathname.startsWith('/end')) {
        return NextResponse.redirect("http://localhost:3000")
    }
}
