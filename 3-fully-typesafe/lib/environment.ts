import z from "zod";

/** Type utility to allow checking if input satisfies a type */
type ZodInputFor<T> = z.ZodType<unknown, z.ZodTypeDef, T>;

/** Schema for environment variables */
export const EnvironmentSchema = z
  .object({
    MY_ENV_VAR: z.string(),
  })
  .readonly() satisfies ZodInputFor<Record<string, string>>;

/** Type representing the valid values of the schema */
export type Environment = z.infer<typeof EnvironmentSchema>;

/** Type representing the input values of the schema */
export type EnvironmentInput = z.input<typeof EnvironmentSchema>;
