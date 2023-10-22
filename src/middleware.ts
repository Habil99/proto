import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/sign-in", "/sign-up"];
const protectedRoutes = ["/profile/posts/create"];

export const config = {
  matchers: [...authRoutes, ...protectedRoutes],
};

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthPage = authRoutes.includes(pathname);
  const isProtectedPage = protectedRoutes.includes(pathname);

  if (isAuthPage) {
    const token = request.cookies.get("token");

    // FIXME: only redirect if user logged in
    // if (token) {
    //   return NextResponse.redirect(new URL("/", request.url));
    // }
  }

  // if (isProtectedPage) {
  //   console.log("protected page");
  //   return NextResponse.redirect(new URL(`/sign-in`, request.url));
  // }

  return NextResponse.next();
}
