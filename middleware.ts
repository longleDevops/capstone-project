import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({

  publicRoutes: ['/', '/admin', '/admin/dashboard', '/admin/student', '/admin/statistics', '/api/accounts/all-accounts', "/api/accounts/submitted-accounts", "/api/backgrounds", "/api/internationalStudent", "/api/domesticStudent", "/api/searchingJob", "/api/seekingDegree", "/api/working"],

});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}