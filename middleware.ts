import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({

  publicRoutes: ['/', '/admin', '/admin/dashboard', '/admin/reports'],

});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};