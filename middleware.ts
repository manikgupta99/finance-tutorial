import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a matcher for protected routes
const isProtectedRoute = createRouteMatcher(['/']);

// Middleware function to protect routes
export default clerkMiddleware((auth, request) => {
    if (isProtectedRoute(request)) {
        auth().protect();
    }
    return NextResponse.next();
});

// Configuration for the middleware
export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
