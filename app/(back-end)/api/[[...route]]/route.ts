import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import accounts from './accounts'
import backgrounds from './student-background'
import domesticStudent from './domestic-student'
import internationalStudent from './international-student'
import seekingDegree from './seeking-degree'
import working from './working'
import satisfaction from './satisfaction'

export const runtime = 'edge';

const app = new Hono().basePath('/api')

const routes = app
  .route("/accounts", accounts)
  .route("/backgrounds", backgrounds)
  .route("/domesticStudent", domesticStudent)
  .route("/internationalStudent", internationalStudent)
  .route("/seekingDegree", seekingDegree)
  .route("/working", working)
  .route("/satisfaction", satisfaction)

export const GET = handle(app)
export const POST = handle(app)


export type AppType = typeof routes; 