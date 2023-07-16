import { config } from "dotenv";
config();

import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string({
    required_error: "Database url is required",
  }),

  PORT: z.number().optional().default(5000),
  REDIS_URL: z.string({
    required_error: "Redis url is required",
  }),
});

export const __dev__ = process.env.NODE_ENV !== "production";
export const { DATABASE_URL, PORT, REDIS_URL } = envSchema.parse(process.env);

