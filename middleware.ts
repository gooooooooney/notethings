import { authMiddleware } from "@clerk/nextjs";
import { ignoredRoutes, publicRoutes, authRoutes, DEFAULT_LOGIN_REDIRECT } from "./config/routes";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse, type NextRequest } from "next/server";
import { env } from "@/lib/env.mjs"

let redis: Redis;
let ratelimit: Ratelimit;


/* -----------------------------------------------------------------------------------------------
 * Rate limiting middleware
 * -----------------------------------------------------------------------------------------------*/
if (env.UPSTASH_REDIS_REST_URL) {
  redis = new Redis({
    url: env.UPSTASH_REDIS_REST_URL ?? "",
    token: env.UPSTASH_REDIS_REST_TOKEN ?? "",
  });

  ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(20, "3 s"),
  });
}

async function rateLimitMiddleware(
  request: NextRequest,
): Promise<Response | undefined> {
  const ip = request.ip ?? "anonymous";
  const { success, limit, pending, remaining,reset } = await ratelimit.limit(ip);
  return success
    ? NextResponse.next()
    : 
    // NextResponse.redirect(new URL("/blocked", request.url));
    NextResponse.json(
      {
        error: {
          message: "Too many requests",
          limit,
          pending,
          remaining,
          reset: `${reset - Date.now()}ms`,
        },
      },
      {
        status: 429,
        headers: {
          "x-ratelimit-limit": limit.toString(),
          "x-ratelimit-remaining": remaining.toString(),
        },
      }
    );
}

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  beforeAuth: (req) => {
    if (env.UPSTASH_REDIS_REST_URL && env.NODE_ENV === "production") {
      return rateLimitMiddleware(req);
    }
    return NextResponse.next();
  },
  afterAuth: (auth, req) => {
    const isAuthRoute = authRoutes.includes(req.nextUrl.pathname);
    /**
     * If the user is logged in and tries to access an auth route, redirect them to the default login redirect
     */
    if (
      auth.userId &&
      isAuthRoute
    ) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
    }

    if (!auth.userId && req.nextUrl.pathname.includes(DEFAULT_LOGIN_REDIRECT)) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    return NextResponse.next();
  },
  ignoredRoutes,
  publicRoutes,
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};