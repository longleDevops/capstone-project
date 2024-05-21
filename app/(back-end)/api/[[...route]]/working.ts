import { Hono } from "hono";
import db from "../../db/drizzle";
import { eq } from "drizzle-orm";
import { working, insertWorkingSchema } from "../../db/schema";
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
        currentStatus: working.currentStatus,

      })
        .from(working)
        .where(eq(working.userId, auth?.userId))

      return c.json({ data })
    })
  .post('/',
    clerkMiddleware(),
    zValidator("json", insertWorkingSchema.pick({
      isWorking: true,
      companyName: true,
      jobTitle: true,
      salary: true
    })),
    async (c) => {
      const auth = getAuth(c)
      const values = c.req.valid("json")
      if (!auth?.userId) { return c.json({ error: 'Unauthorized' }, 401) }

      const [data] = await db.insert(working).values({
        ...values,
        userId: auth.userId
      }).returning().onConflictDoNothing()
      return c.json({ data })
    }
  )

export default app; 