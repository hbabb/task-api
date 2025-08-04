import { defineConfig } from "drizzle-kit";

import env from "@/env";

export default defineConfig({
  out: ".drizzle",
  schema: "./src/db/schema.ts",
  casing: "camelCase",
  dialect: "turso",
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.NODE_ENV === "development" ? undefined : env.TURSO_AUTH_TOKEN,
  },
});
