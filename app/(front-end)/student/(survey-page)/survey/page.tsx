import db from '@/app/(back-end)/db/drizzle'
import { account } from '@/app/(back-end)/db/schema'
import { Survey } from '@/components/student/survey'
import { auth } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

const page = async () => {
  const { userId } = auth()

  if (!userId)
    return
  (<div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '40px' }}>
    ...Loading666
  </div>)

  const data = await db.select().from(account).where(eq(account.id, userId))
  const isSubmitted = data ? data[0].isSubmitted : false

  if (isSubmitted) redirect('/student/home')
  return (
    <Survey />
  )
}

export default page