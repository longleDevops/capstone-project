import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({

  publicRoutes: ['/', '/admin', '/admin/dashboard', '/admin/dashboardv2', '/admin/dashboardv3', '/admin/student', '/admin/statistics'],

});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}