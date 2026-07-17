import js from "@eslint/js";
import ts from "typescript-eslint";
import turbo from "eslint-plugin-turbo";

/** Shared flat config every package in the monorepo builds on. */
export const base = [
  js.configs.recommended,
  ...ts.configs.recommended,
  turbo.configs["flat/recommended"],
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.nuxt/**",
      "**/.output/**",
      "**/.turbo/**",
    ],
  },
];

export default base;
