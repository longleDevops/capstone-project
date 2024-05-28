import db from "@/app/(back-end)/db/drizzle";
import { NotStarted } from "./not-started";
import { account, satisfaction } from "@/app/(back-end)/db/schema";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import styles from './style.module.css'
import { currentUser } from '@clerk/nextjs/server';


export const Home = async () => {
  const { userId } = auth();
  const user = await currentUser()
  if (!userId) {
    redirect("/")
  }

  if (!user) {
    redirect("/")
  }
  const firstName = user.firstName === null ? '' : user.firstName
  const lastName = user.lastName === null ? '' : user.lastName

  await db.insert(account)
    .values({
      id: userId,
      firstName,
      lastName
    })
    .onConflictDoNothing({ target: account.id });

  const userObject = await db.select({
    isSubmitted: account.isSubmitted,
  }).from(account).where(eq(account.id, userId))

  const { isSubmitted } = userObject[0]

  const formatTime = (dateObject: Date) => {
    const result = dateObject.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' });

    return result;
  }

  if (isSubmitted) {
    const satisfactionData = await db.select({
      createdAt: satisfaction.createdAt
    }).from(satisfaction).where(eq(satisfaction.userId, userId))

    const { createdAt } = satisfactionData[0]
    return (
      <div className={styles.completion_holder}>
        <div> Congratulations! You have submitted the survey at </div>
        <p>{formatTime(createdAt)}</p>
      </div>)
  }


  return (
    <NotStarted firstName={firstName} lastName={lastName} userId={userId} />
  );

};
