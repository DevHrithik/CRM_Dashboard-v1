import { sql } from "drizzle-orm";
import { integer, text, sqliteTableCreator } from "drizzle-orm/sqlite-core";

export const accountTypeEnum = ["email", "google", "github"] as const;

const sqliteTable = sqliteTableCreator((name) => `${name}`);

export const tasks = sqliteTable("tasks", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  userId: integer("user_id", { mode: "number" })
    .notNull(),
  title: text("title").notNull(),
  description: text("description"),
  dueDate: integer("due_date", { mode: "timestamp" }),
  completed: integer("completed", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export type Task = typeof tasks.$inferSelect;
