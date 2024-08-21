import z from "zod";

const kebabCaseRegexp = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Type utility to allow checking if input satisfies a type */
type ZodInputFor<T> = z.ZodType<unknown, z.ZodTypeDef, T>;

/** Schema for environment variables */
export const EnvironmentSchema = z
  .object({
    /**
     * Magic variable. Must be in `kebab-case`.
     *
     * It's used to do stuff.
     * Some additional guidelines and documentation for the variable.
     * Write whatever you want here. Even [links](https://example.com).
     *
     * @example "my-fantastic-value"
     */
    MY_ENV_VAR: z.string().startsWith("my-").min(8).regex(kebabCaseRegexp),
  })
  .readonly() satisfies ZodInputFor<Record<string, string>>;

/** Type representing the valid values of the schema */
export type Environment = z.infer<typeof EnvironmentSchema>;

/** Type representing the input values of the schema */
export type EnvironmentInput = z.input<typeof EnvironmentSchema>;
