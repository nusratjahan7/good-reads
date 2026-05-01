import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function proxy(request) {  
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (session) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    matcher: ['/allBooks/details/:path*'],
};