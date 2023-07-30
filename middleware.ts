//import { NextResponse } from "next/server";
//import type { NextRequest } from "next/server";
//import { getSession } from "next-auth/react";
//import { IncomingHttpHeaders } from "http"; // Import the IncomingHttpHeaders type
//
//type CombinedRequest = NextRequest & {
//  headers: IncomingHttpHeaders;
//};
//
//export async function middleware(req: CombinedRequest) {
//  const session = await getSession({ req });
//
//  if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
//    return NextResponse.redirect(new URL("/", req.url));
//  } else if (session) {
//    return NextResponse.next();
//  }
//}

export { default } from "next-auth/middleware";
export const config = { matcher: [] };
