import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/sign-in", "/sign-up"];

export const config = {
  matchers: [...authRoutes],
};

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthPage = authRoutes.includes(pathname);

  if (isAuthPage) {
    const token = request.cookies.get("token");

    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}
