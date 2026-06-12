import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (url.pathname === "/") {
    return NextResponse.next();
  }

  if (url.pathname.endsWith(".html")) {
    return NextResponse.next();
  }

  const token = request.cookies.get("refreshToken")?.value;

  if (url.pathname.startsWith("/auth/login") && token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (url.pathname.startsWith("/auth")) {
    return NextResponse.next();
  }

  if (url.pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
