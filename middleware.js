// // middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const pathname = req.nextUrl.pathname;

  // protect any /studio route
  if (pathname.startsWith("/studio")) {
    const adminAuth = req.cookies.get("admin-auth")?.value;
    if (adminAuth !== "true") {
      url.pathname = "/login";
      url.search = `from=${encodeURIComponent(pathname)}`;
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*"],
};





// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const maintenanceMode =
//     process.env.NEXT_PUBLIC_MAINTENANCE === "true";

//   if (!maintenanceMode) {
//     return NextResponse.next();
//   }

//   const pathname = request.nextUrl.pathname;

//   // Allow maintenance page
//   if (pathname.startsWith("/maintenance")) {
//     return NextResponse.next();
//   }

//   // Allow Next.js internal files
//   if (pathname.startsWith("/_next")) {
//     return NextResponse.next();
//   }

//   // Allow static assets
//   if (
//     pathname.startsWith("/images") ||
//     pathname.startsWith("/icons") ||
//     pathname.startsWith("/favicon.ico") ||
//     pathname.startsWith("/robots.txt") ||
//     pathname.startsWith("/sitemap.xml")
//   ) {
//     return NextResponse.next();
//   }

//   return NextResponse.redirect(
//     new URL("/maintenance", request.url)
//   );
// }

// export const config = {
//   matcher: "/:path*",
// };

