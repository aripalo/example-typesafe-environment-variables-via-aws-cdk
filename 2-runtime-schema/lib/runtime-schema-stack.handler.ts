import { EnvironmentSchema } from "./environment";

const env = EnvironmentSchema.parse(process.env);

export const handler = async () => {
  console.debug(env.MY_ENV_VAR);
};
