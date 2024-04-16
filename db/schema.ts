import { pgTable, serial, text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("User", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
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
  userName: text("user_name").notNull(),
  dateOfBirth: text("birth_date").notNull(),
  gender: text("gender").notNull(),
  phoneNumber: text("phone_number").notNull(),
})