import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const url = req.nextUrl.clone();

  // rutas protegidas
  const protectedPaths = ["/", "/courses", "/profile"];
  const isProtected = protectedPaths.some((path) => url.pathname.startsWith(path));

  if (isProtected && !token) {
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [ "/courses/:path*", "/profile/:path*"],
};
