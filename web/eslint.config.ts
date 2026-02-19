import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default [
  {
    ignores: ["dist"],
  },
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "simple-import-sort": simpleImportSort,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-console": ["error", { allow: ["warn", "error"] }],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "react-refresh/only-export-components": "warn",
    },
  },
];
