import z from "zod";

const kebabCaseRegexp = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Schema for environment variables */
export const EnvironmentSchema = z.object({
  MY_ENV_VAR: z.string().startsWith("my-").min(8).regex(kebabCaseRegexp),
});
