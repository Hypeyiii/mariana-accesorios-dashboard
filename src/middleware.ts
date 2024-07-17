import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export default async function middleware(req: NextRequest) {
  const tokenCookie = req.cookies.get("token");
  const jwt = tokenCookie ? tokenCookie.value : undefined;

  const dashboardUrl = new URL("/dashboard", req.nextUrl.origin);
  const homeUrl = new URL("/", req.nextUrl.origin);

  if (req.nextUrl.pathname === "/dashboard") {
    if (jwt === undefined) {
      return NextResponse.redirect(homeUrl);
    }
    try {
      const { payload } = await jwtVerify(
        jwt,
        new TextEncoder().encode(
          process.env.JWT_SECRET || "secret-json-web-token"
        )
      );
      console.log(payload);
      return NextResponse.next();
    } catch (err) {
      console.error("JWT verification error:", err);
      return NextResponse.redirect(homeUrl);
    }
  }

  if (req.nextUrl.pathname === "/") {
    if (jwt !== undefined) {
      try {
        const { payload } = await jwtVerify(
          jwt,
          new TextEncoder().encode(
            process.env.JWT_SECRET || "secret-json-web-token"
          )
        );
        console.log(payload);
        return NextResponse.redirect(dashboardUrl);
      } catch (err) {
        console.error("JWT verification error:", err);
      }
    }
  }

  return NextResponse.next();
}
