import { NextResponse } from "next/server";

export async function middleware(req, res) {
  if (req.nextUrl.pathname === "/") {
    const res = NextResponse.next();
    const data = req.cookies.get("user");
    if (!data) {
      return NextResponse.rewrite(new URL("/login", req.url));
    }

    return res;
  }

  if (req.nextUrl.pathname === "/login") {
    const res = NextResponse.next();
    const data = req.cookies.get("user");
    if (data) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return res;
  }
}

export const config = {
  matcher: ["/", "/login"],
};
