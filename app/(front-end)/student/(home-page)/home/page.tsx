import { Home } from "@/components/student/home";
import db from "@/app/(back-end)/db/drizzle";
import { account } from "@/app/(back-end)/db/schema";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
  const { userId } = auth();
  // const user = await currentUser()
  if (!userId) {
    redirect("/")
  }
  await db.insert(account)
    .values({ id: userId, firstName: 'k', lastName: 'le' })
    .onConflictDoNothing({ target: account.id });

  return <Home />;
};

export default Page;
