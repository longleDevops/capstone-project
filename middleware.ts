import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({

  publicRoutes: ['/', '/admin(.*)', "/api(.*)", "cwusurvey.vercel.app/admin(.*)", "cwusurvey.vercel.app/api(.*)"],

});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}