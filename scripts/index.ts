import { account } from "@/app/(back-end)/db/schema";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "@/app/(back-end)/db/schema";

async function main() {
  const sql = neon("postgresql://career-path_owner:JCaNYRAb3ev5@ep-orange-cloud-a6ut7nna.us-west-2.aws.neon.tech/career-path?sslmode=require");
  const db = drizzle(sql, { schema });
  await db.delete(account)
}

main();