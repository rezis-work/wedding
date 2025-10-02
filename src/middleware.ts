import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // No middleware needed - authentication is handled at page level
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Disable middleware to prevent redirect loops
     * Authentication is handled in individual pages
     */
  ],
};
