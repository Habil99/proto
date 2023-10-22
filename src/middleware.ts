import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/sign-in", "/sign-up"];
const protectedRoutes = ["/profiles/:path*"];

export const config = {
  matchers: [...authRoutes, ...protectedRoutes],
};

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthPage = authRoutes.includes(pathname);
  const isProtectedPage = protectedRoutes.includes(pathname);

  if (isAuthPage) {
    const token = request.cookies.get("token");

    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (isProtectedPage) {
    return NextResponse.redirect(
      new URL(`/sign-in?origin=${pathname}`, request.url),
    );
  }

  return NextResponse.next();
}
