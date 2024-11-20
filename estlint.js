module.exports = {
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended", // Use ESLint's recommended rules
      "plugin:react/recommended", // React rules
      "plugin:@typescript-eslint/recommended", // TypeScript-ESLint recommended rules
    ],
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser for TypeScript
    parserOptions: {
      ecmaVersion: 12, // Support modern JavaScript features
      sourceType: "module", // Support ES Modules
      ecmaFeatures: {
        jsx: true, // Enable linting for JSX
      },
    },
    plugins: ["react", "@typescript-eslint"], // Add React and TypeScript-ESLint plugins
    rules: {
      // Customize your rules here
      "no-unused-vars": "off", // Disabled in favor of @typescript-eslint/no-unused-vars
      "@typescript-eslint/no-unused-vars": "warn", // Warn on unused variables (TypeScript-aware)
      "no-console": "off", // Allow console.log statements
      "eqeqeq": "error", // Require strict equality (===)
      "@typescript-eslint/explicit-module-boundary-types": "off", // Optional: Don't enforce return types
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  };
  