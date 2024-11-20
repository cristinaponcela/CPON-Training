import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Match desired file extensions
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: pluginReact,
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // Add JavaScript recommended rules
      ...tseslint.configs.recommended.rules, // Add TypeScript recommended rules
      ...pluginReact.configs.flat.recommended.rules, // Add React recommended rules

      // Example custom rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "react/react-in-jsx-scope": "off", // Disable for React 17+
    },
  },
];
