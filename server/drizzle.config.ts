import type { Config } from "drizzle-kit";
export default {
  schema: "./db/schema.ts",
  out: "./dist",
} satisfies Config;