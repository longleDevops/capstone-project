import { pgTable, serial, text, uuid } from "drizzle-orm/pg-core";
// db schema
export const account = pgTable("Account", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull()
})

export const studentBackground = pgTable("Student Background", {
  id: serial("id").primaryKey(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),

  role: text("role").notNull()
})

export const surveys = pgTable("Survey", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  A: text("A").notNull(),
  B: text("B").notNull(),
  C: text("C").notNull(),
  D: text("D").notNull(),
})

export const profile = pgTable("Profile", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  dateOfBirth: text("birth_date").notNull(),
  gender: text("gender").notNull(),
  phoneNumber: text("phone_number").notNull(),
})