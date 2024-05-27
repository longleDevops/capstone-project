import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import db from "../../db/drizzle";
import { account } from "../../db/schema";

const app = new Hono()
  .get('/',
    clerkMiddleware(),
    async (c) => {
      const auth = getAuth(c)

      if (!auth?.userId) {
        return c.json({ error: 'Unauthorized' }, 401)
      }
      const data = await db.select()
        .from(account)
        .where(eq(account.id, auth?.userId))
      return c.json({ data })
    })
  .get("submitted-accounts",
    async (c) => {

      const data = await db.select({
        id: account.id,
        firstName: account.firstName,
        lastName: account.lastName,
      })
        .from(account)
        .where(eq(account.isSubmitted, true))
      return c.json({ data })
    })
  .get('/all-accounts',
    async (c) => {

      const data = await db.select()
        .from(account)
        .orderBy(account.createdAt)
      return c.json({ data })
    })

  .post('/',
    async (c) => {
      const auth = getAuth(c)
      if (!auth?.userId) { return c.json({ error: 'Unauthorized' }, 401) }

      const [data] = await db.insert(account).values({
        id: auth?.userId,
      }).returning().onConflictDoNothing()
      return c.json({ data })
    }
  )
  .patch('/update-submission',
    clerkMiddleware(),
    async (c) => {
      const auth = getAuth(c)
      if (!auth?.userId) { return c.json({ error: 'Unauthorized' }, 401) }
      const data = await db.update(account)
        .set({ isSubmitted: true })
        .where(eq(account.id, auth.userId)).returning({ updatedId: account.id })
      console.log("updated successfully")
      return c.json({ data })
    }
  )

export default app; 