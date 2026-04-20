import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function skipMiddleware(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  );
}

/**
 * In development, avoid caching HTML navigations so the browser does not keep
 * stale ?v= references to /_next/static/* after HMR or dev restarts (broken JS/CSS).
 *
 * Important: never mutate responses for /_next/* — matcher quirks or new internal
 * routes must not receive these headers; Next must control dev asset caching/HMR.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (skipMiddleware(pathname)) {
    return NextResponse.next();
  }

  if (process.env.NODE_ENV !== "development") {
    return NextResponse.next();
  }

  const res = NextResponse.next();
  res.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, pragma: no-cache, max-age=0"
  );
  return res;
}

export const config = {
  matcher: [
    /*
     * Exclude Next internals and API from middleware entirely (zero runtime on assets).
     * Leading slash + negative lookahead on the first path segment.
     */
    "/((?!_next/|api/|favicon.ico|robots.txt|sitemap.xml).*)",
    "/",
  ],
};
