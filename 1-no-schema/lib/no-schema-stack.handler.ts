import assert from "node:assert/strict";

const kebabCaseRegexp = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function isKebabCase(value: string): boolean {
  return kebabCaseRegexp.test(value);
}

function isValidVariable(value: unknown): value is string {
  return (
    typeof value === "string" &&
    isKebabCase(value) &&
    value.length >= 8 &&
    value.startsWith("my-")
  );
}

export const handler = async () => {
  assert(isValidVariable(process.env.MY_ENV_VAR), "MY_ENV_VAR is invalid");
  console.debug(process.env.MY_ENV_VAR);
};
