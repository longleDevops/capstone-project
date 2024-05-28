import { boolean, integer, pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod"
import { relations } from 'drizzle-orm';

// db schema
export const account = pgTable("Account", {
  id: text("id").primaryKey(),
  firstName: text("First Name").default("").notNull(),
  lastName: text("Last Name").default("").notNull(),
  isSubmitted: boolean("Survey Completed").default(false).notNull(),
  createdAt: timestamp("Created At", { mode: "date", withTimezone: true }).defaultNow().notNull()

})

export const insertAccountSchema = createInsertSchema(account)

export const studentBackground = pgTable("Student Background", {
  id: serial("id").primaryKey(),
  firstName: text("First Name").notNull().default(''),
  lastName: text("Last Name").notNull().default(''),
  studentId: text("Student ID").default('0000000'),
  major: text("Major").notNull(),
  startTerm: text("Start Term").notNull(),
  endTerm: text("End Term").notNull(),
  campus: text("Campus").notNull(),
  gender: text("Gender").notNull(),
  race: text("Race").notNull(),
  degreeLevel: text("Degree").notNull(),
  status: text("Status").notNull(),
  avgSalary: integer("Avg Salary").notNull(),
  isEmployed: boolean("Is Employed").notNull(),
  avgRating: text("Avg Rating").notNull(),

  userId: text('userID').notNull().unique().references(() => account.id, { onDelete: 'cascade' })

})

export const insertBackgroundSchema = createInsertSchema(studentBackground)

export const accountRelations = relations(account, ({ one }) => ({
  studentBackground: one(studentBackground),
  domesticStudent: one(domesticStudent),
  internationalStudent: one(internationalStudent),
  working: one(working),
  searchingJob: one(searchingJob),
  seekingDegree: one(seekingDegree),
  satisfaction: one(satisfaction)
}));

export const domesticStudent = pgTable("Domestic Student", {
  id: serial("id").primaryKey(),
  currentStatus: text("Status").notNull().default("Domestic Student"),

  isInternship: boolean("Internship"),

  internshipCompany: text("Internship Company"),
  internshipTitle: text("Internship title"),
  internshipSalary: text("Internship Salary"),
  internshipPrepTime: text("Prep Time"),
  avgInternshipSalary: integer("Average Salary").notNull(),

  userId: text('userID').notNull().unique().references(() => account.id, { onDelete: 'cascade' })
})
export const insertDomesticStudentSchema = createInsertSchema(domesticStudent)

export const internationalStudent = pgTable("International Student", {
  id: serial("id").primaryKey(),
  currentStatus: text("Status").notNull().default("International Student"),

  isOPT: boolean("CPT/OPT"),

  companyName: text("Company Name"),
  jobTitle: text("Job Title"),
  salary: text("Salary"),
  avgSalary: integer("Average Salary").notNull(),
  userId: text('userID').notNull().unique().references(() => account.id, { onDelete: 'cascade' })
})
export const insertInternationalStudentSchema = createInsertSchema(internationalStudent)


export const working = pgTable("Working", {
  id: serial("id").primaryKey(),
  currentStatus: text("Status").notNull().default("Currently Working"),

  companyName: text("Company Name").notNull(),
  jobTitle: text("Job Title").notNull(),
  salary: text("Salary").notNull(),
  avgSalary: integer("Average Salary").notNull(),

  userId: text('userID').notNull().unique().references(() => account.id, { onDelete: 'cascade' })
})
export const insertWorkingSchema = createInsertSchema(working)

export const seekingDegree = pgTable("Seeking Degree", {
  id: serial("id").primaryKey(),
  currentStatus: text("Status").notNull().default("Seeking Degree"),

  institution: text("Institution Name").notNull(),
  degreeLevel: text("Degree Level").notNull(),
  major: text("Job Title").notNull(),
  isHelped: boolean("Is Helpful").notNull(),
  prepTime: text("Accepted Time").notNull(),

  userId: text('userID').notNull().unique().references(() => account.id, { onDelete: 'cascade' })
})
export const insertSeekingDegreeSchema = createInsertSchema(seekingDegree)

export const searchingJob = pgTable("Searching Job", {
  id: serial("id").primaryKey(),
  currentStatus: text("Status").notNull().default("Searching Job"),

  companyName: text("Company Name").notNull(),
  jobTitle: text("Job Title").notNull(),
  salary: text("Salary").notNull(),


  userId: text('userID').notNull().unique().references(() => account.id, { onDelete: 'cascade' })
})
export const insertSearchingJobSchema = createInsertSchema(searchingJob)

export const satisfaction = pgTable("Satisfaction", {
  id: serial("id").primaryKey(),
  q1: text("Q1").notNull().default("How did CWU help you with career planning and decisions?"),
  q1Answer: integer("Q1 Answer").notNull(),

  q2: text("Q2").notNull().default("How did CWU build your communication and technical skills?"),
  q2Answer: integer("Q2 Answer").notNull(),

  q3: text("Q3").notNull().default("How did CWU prepare for your resume?"),
  q3Answer: integer("Q3 Answer").notNull(),

  q4: text("Q4").notNull().default("How did CWU prepare for your interviews?"),
  q4Answer: integer("Q4 Answer").notNull(),

  q5: text("Q5").notNull().default("How would you rate the professional level of CWU staff?"),
  q5Answer: integer("Q5 Answer").notNull(),

  createdAt: timestamp("Created At", { withTimezone: true }).defaultNow().notNull(),

  userId: text('userID').notNull().unique().references(() => account.id, { onDelete: 'cascade' })
})
export const insertSatisfactionSchema = createInsertSchema(satisfaction)




