import { Hono } from "hono";
import db from "../../db/drizzle";
import { eq } from "drizzle-orm";
import { domesticStudent, insertDomesticStudentSchema } from "../../db/schema";
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
        .from(domesticStudent)

      return c.json({ data })
    })
  .post('/',
    clerkMiddleware(),
    zValidator("json", insertDomesticStudentSchema.pick({
      currentStatus: true,
      isInternship: true,
      internshipCompany: true,
      internshipTitle: true,
      internshipSalary: true,
      internshipPrepTime: true,
      avgInternshipSalary: true
    })),
    async (c) => {
      const auth = getAuth(c)
      const values = c.req.valid("json")
      if (!auth?.userId) { return c.json({ error: 'Unauthorized' }, 401) }

      const [data] = await db.insert(domesticStudent).values({
        ...values,
        userId: auth.userId
      }).returning().onConflictDoNothing()
      return c.json({ data })
    }
  )

export default app; 