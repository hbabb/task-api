import { drizzle } from "drizzle-orm/libsql";

import * as schema from "@/db/schema";
import env from "@/env";

export const db = drizzle({
  connection: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
  casing: "snake_case",
  schema,
});
