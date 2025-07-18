import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const currentCookie = request.cookies.get("nextjs-token");
  console.log(currentCookie);
  const dummyUserData = {
    role: "admin",
    email: "admin@gmail.com",
  };
  const isServicePage = request.nextUrl.pathname.includes("/services");
  let isAdmin = dummyUserData.role == "admin";
  //   if (isServicePage && !isAdmin)
  //     return NextResponse.redirect(new URL("/", request.url));
  return NextResponse.next();
}
