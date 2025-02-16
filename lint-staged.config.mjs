/**
 * @see https://github.com/lint-staged/lint-staged#configuration
 * @type {import('lint-staged').Config}
 */
export default {
  "*": ["pnpm format", "pnpm editorconfig-checker"],
  "package.json": [
    () => "pnpm syncpack-fix-mismatches",
    () => "pnpm syncpack-format",
  ],
};
