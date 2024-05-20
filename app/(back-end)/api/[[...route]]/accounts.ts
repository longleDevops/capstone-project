import { Hono } from "hono";
import db from "../../db/drizzle";
import { eq } from "drizzle-orm";
import { account, insertAccountSchema } from "../../db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth"
import { zValidator } from '@hono/zod-validator'

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
    // zValidator("json", insertAccountSchema.pick({
    //   firstName: true
    // })),
    async (c) => {
      const auth = getAuth(c)
      // const values = c.req.valid("json")
      if (!auth?.userId) { return c.json({ error: 'Unauthorized' }, 401) }

      const [data] = await db.insert(account).values({
        id: auth?.userId,


      }).returning()
      return c.json({ data })
    }
  )

export default app; 