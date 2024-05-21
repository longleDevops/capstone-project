import { Hono } from "hono";
import db from "../../db/drizzle";
import { eq } from "drizzle-orm";
import { domesticStudent, insertDomesticStudentSchema, insertInternationalStudentSchema, internationalStudent } from "../../db/schema";
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
        currentStatus: domesticStudent.currentStatus,

      })
        .from(domesticStudent)
        .where(eq(domesticStudent.userId, auth?.userId))

      return c.json({ data })
    })
  .post('/',
    clerkMiddleware(),
    zValidator("json", insertInternationalStudentSchema.pick({
      currentStatus: true,
      isOPT: true,
      companyName: true,
      jobTitle: true,
      salary: true,
    })),
    async (c) => {
      const auth = getAuth(c)
      const values = c.req.valid("json")
      if (!auth?.userId) { return c.json({ error: 'Unauthorized' }, 401) }

      const [data] = await db.insert(internationalStudent).values({
        ...values,
        userId: auth.userId
      })
        .onConflictDoNothing()
        .returning()
      return c.json({ data })
    }
  )

export default app; 