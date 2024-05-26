import { Home } from "@/components/student/home";
import db from "@/app/(back-end)/db/drizzle";
import { account } from "@/app/(back-end)/db/schema";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { currentUser } from '@clerk/nextjs/server';


const Page = async () => {
  const { userId } = auth();
  const user = await currentUser()
  if (!userId) {
    redirect("/")
  }

  if (!user) {
    redirect("/")
  }
  await db.insert(account)
    .values({ id: userId, firstName: user.firstName, lastName: user.lastName })
    .onConflictDoNothing({ target: account.id });

  return <Home />;
};

export default Page;
