import { Hono } from "hono";
import db from "../../db/drizzle";
import { eq } from "drizzle-orm";
import { seekingDegree, insertSeekingDegreeSchema } from "../../db/schema";
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
        currentStatus: seekingDegree.currentStatus,

      })
        .from(seekingDegree)
        .where(eq(seekingDegree.userId, auth?.userId))

      return c.json({ data })
    })
  .post('/',
    clerkMiddleware(),
    zValidator("json", insertSeekingDegreeSchema.pick({
      isSeeking: true,
      institution: true,
      major: true,
      isHelped: true
    })),
    async (c) => {
      const auth = getAuth(c)
      const values = c.req.valid("json")
      if (!auth?.userId) { return c.json({ error: 'Unauthorized' }, 401) }

      const [data] = await db.insert(seekingDegree).values({
        ...values,
        userId: auth.userId
      }).returning().onConflictDoNothing()
      return c.json({ data })
    }
  )

export default app; 