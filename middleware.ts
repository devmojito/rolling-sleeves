import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * In development, prevent the browser from caching HTML documents. Cached HTML
 * can keep old ?v= chunk IDs after `next dev` restarts, causing 404s on
 * /_next/static/* and unloaded CSS.
 */
export function middleware(_request: NextRequest) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.next();
  }

  const res = NextResponse.next();
  res.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, max-age=0"
  );
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|_next/webpack-hmr|favicon.ico).*)",
  ],
};
