import z from "zod";

/** Schema for environment variables */
export const EnvironmentSchema = z.object({
  MY_ENV_VAR: z.string(),
});
