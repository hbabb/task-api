import type { z } from "zod";

import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const tasks = sqliteTable("tasks", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  done: int({ mode: "boolean" }).notNull().default(false),
  createdAt: int({ mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: int({ mode: "timestamp" }).$defaultFn(() => new Date()).$onUpdate(() => new Date()),
});

export const selectTasksSchema = createSelectSchema(tasks);

export const insertTasksSchema = createInsertSchema(
  tasks,
  {
    name: schema => schema.min(1).max(500),
  },
).required({
  done: true,
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const patchTasksSchema = insertTasksSchema.partial();

export type InsertTask = z.infer<typeof insertTasksSchema>;
export type SelectTask = z.infer<typeof selectTasksSchema>;
export type UpdateTask = z.infer<typeof patchTasksSchema>;
