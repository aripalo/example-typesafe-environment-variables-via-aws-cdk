import assert from "node:assert/strict";

export const handler = async () => {
  assert(
    typeof process.env.MY_ENV_VAR === "string",
    "MY_ENV_VAR is not defined"
  );
  console.debug(process.env.MY_ENV_VAR);
};
