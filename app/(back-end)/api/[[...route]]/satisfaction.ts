import { Hono } from "hono";
import db from "../../db/drizzle";
import { eq } from "drizzle-orm";
import { satisfaction, insertSatisfactionSchema } from "../../db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth"
import { zValidator } from '@hono/zod-validator'

const app = new Hono()
  .get('/',

    async (c) => {

      const data = await db.select()
        .from(satisfaction)

      return c.json({ data })
    })
  .post('/',
    clerkMiddleware(),
    zValidator("json", insertSatisfactionSchema.pick({
      q1Answer: true,
      q2Answer: true,
      q3Answer: true,
      q4Answer: true,
      q5Answer: true,

    })),
    async (c) => {
      const auth = getAuth(c)
      const values = c.req.valid("json")
      if (!auth?.userId) { return c.json({ error: 'Unauthorized' }, 401) }

      const [data] = await db.insert(satisfaction).values({
        ...values,
        userId: auth.userId
      })
        .onConflictDoNothing()
        .returning()
      return c.json({ data })
    }
  )

export default app; 