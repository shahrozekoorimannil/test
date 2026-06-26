import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = req.nextUrl.pathname.startsWith("/api/auth");
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isAccountRoute = req.nextUrl.pathname.startsWith("/account");

  if (isApiAuthRoute) return null;

  // Rate Limiting Stub (to be integrated with Redis in production)
  const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
  
  if (isApiAuthRoute || req.nextUrl.pathname.startsWith("/api/checkout")) {
    // Check rate limit logic here
    // if (rateLimited(ip)) return new NextResponse("Too Many Requests", { status: 429 });
  }

  if (isAdminRoute) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/account/login", req.nextUrl));
    }
    if (req.auth?.user?.role !== "ADMIN") {
      return Response.redirect(new URL("/", req.nextUrl));
    }
    return null;
  }

  if (isAccountRoute && !req.nextUrl.pathname.includes("/login") && !req.nextUrl.pathname.includes("/register")) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/account/login", req.nextUrl));
    }
  }

  return null;
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
