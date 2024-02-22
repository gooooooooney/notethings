/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 */
export const publicRoutes = ["/", "/terms", "/privacy", "/pricing"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to `DEFAULT_LOGIN_REDIRECT`
 */
export const authRoutes = ["/login", "/signup", "/reset-password"];

/**
 * An array of routes that are ignored by the auth middleware
 */
export const ignoredRoutes = ["/"];
/**
 * The default redirect path after a user logs in
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
