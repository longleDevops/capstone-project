import { Hono } from "hono";
import db from "../../db/drizzle";
import { eq } from "drizzle-orm";
import { studentBackground, insertAccountSchema, insertBackgroundSchema } from "../../db/schema";
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
      const data = await db.select()
        .from(studentBackground)

      return c.json({ data })
    })
  .post('/',
    clerkMiddleware(),
    zValidator("json", insertBackgroundSchema.pick({
      firstName: true,
      lastName: true,
      studentId: true,
      major: true,
      startTerm: true,
      endTerm: true,
      campus: true,
      gender: true,
      race: true,
      degreeLevel: true,
      status: true
    })),
    async (c) => {
      const auth = getAuth(c)
      const values = c.req.valid("json")
      if (!auth?.userId) { return c.json({ error: 'Unauthorized' }, 401) }

      const [data] = await db.insert(studentBackground).values({
        ...values,
        userId: auth.userId
      })
        .onConflictDoNothing()
        .returning()

      return c.json({ data })
    }
  )

export default app; 