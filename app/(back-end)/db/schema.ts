import { boolean, integer, pgTable, serial, text, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod"
import { relations } from 'drizzle-orm';

// db schema
export const account = pgTable("Account", {
  id: text("id").primaryKey(),
  firstName: text("First Name").default("N/A").notNull(),
  lastName: text("Last Name").default("N/A").notNull(),
})

export const insertAccountSchema = createInsertSchema(account)

export const studentBackground = pgTable("Student Background", {
  id: serial("id").primaryKey(),
  firstName: text("First Name").notNull(),
  lastName: text("Last Name").notNull(),
  studentId: text("Student ID"),
  major: text("Major").notNull(),
  startTerm: text("Start Term"),
  endTerm: text("End Term"),

  userId: text('userID').notNull().unique().references(() => account.id, { onDelete: 'cascade' })

})

export const insertBackgroundSchema = createInsertSchema(studentBackground)

export const accountRelations = relations(account, ({ one }) => ({
  studentBackground: one(studentBackground),
}));

export const employmentStatus = pgTable("Employment Status", {
  id: serial("id").primaryKey(),
  currentStatus: text("Status").notNull(),
  isInternationalStudent: boolean("International Student").notNull(),
  isWorking: boolean("Working").notNull(),
  isSeekingDegree: boolean("Seeking Degree").notNull(),


  isOPT: boolean("OPT/CPT"),
  isInternship: boolean("Internship"),

  optCompany: text("OPT Company"),
  internCompany: text("Intern Company"),

  userId: text('userID').notNull().unique().references(() => account.id, { onDelete: 'cascade' })

})


// export const surveys = pgTable("Survey", {
//   id: serial("id").primaryKey(),
//   question: text("question").notNull(),
//   A: text("A").notNull(),
//   B: text("B").notNull(),
//   C: text("C").notNull(),
//   D: text("D").notNull(),
// })

// export const profile = pgTable("Profile", {
//   id: serial("id").primaryKey(),
//   firstName: text("first_name").notNull(),
//   lastName: text("last_name").notNull(),
//   dateOfBirth: text("birth_date").notNull(),
//   gender: text("gender").notNull(),
//   phoneNumber: text("phone_number").notNull(),
// })

