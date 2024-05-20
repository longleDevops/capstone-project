import { Config } from "drizzle-kit";

export default {
  schema: "./app/(back-end)/db/schema.ts",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config