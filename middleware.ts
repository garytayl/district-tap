import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const MOBILE_UA_REGEX =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname !== "/") {
    return NextResponse.next()
  }

  const userAgent = request.headers.get("user-agent") ?? ""
  const isMobile = MOBILE_UA_REGEX.test(userAgent)

  if (!isMobile) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = "/experience"
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/"],
}
