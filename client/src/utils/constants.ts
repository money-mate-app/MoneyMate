import { z } from "zod";

const envSchema = z.object({
  VITE_SERVER_URL: z.string().optional().default("http://localhost:5000"),

  VITE_GOOGLE_CLIENT_ID: z.string({
    required_error: "Google client id is required",
  }),
  VITE_GOOGLE_CLIENT_SECRET: z.string({
    required_error: "Google client secret is required",
  }),
  VITE_FACEBOOK_APP_ID: z.string({
    required_error: "Facebook app id is required",
  }),
  VITE_MICROSOFT_CLIENT_ID: z.string({
    required_error: "Microsoft client id is required",
  }),
});

export const {
  VITE_FACEBOOK_APP_ID,
  VITE_GOOGLE_CLIENT_ID,
  VITE_GOOGLE_CLIENT_SECRET,
  VITE_MICROSOFT_CLIENT_ID,
  VITE_SERVER_URL,
} = envSchema.parse(import.meta.env);
