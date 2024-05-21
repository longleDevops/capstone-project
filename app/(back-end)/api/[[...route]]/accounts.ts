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
      const data = await db.select({
        id: account.id,
        firstName: account.firstName,
      })
        .from(account)
        .where(eq(account.id, auth?.userId))

      return c.json({ data })
    })
  .post('/',
    clerkMiddleware(),
    async (c) => {
      const auth = getAuth(c)
      if (!auth?.userId) { return c.json({ error: 'Unauthorized' }, 401) }

      const [data] = await db.insert(account).values({
        id: auth?.userId,
      }).returning().onConflictDoNothing()
      return c.json({ data })
    }
  )

export default app; 