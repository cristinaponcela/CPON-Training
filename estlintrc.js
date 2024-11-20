module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Allows modern ECMAScript features
    sourceType: 'module', // Allows `import`/`export`
  },
  plugins: ['@typescript-eslint'], // Add TypeScript plugin
  extends: [
    'eslint:recommended', // Base rules from ESLint
    'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
  ],
  rules: {
    // Customize rules here
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': 'warn',
  },
};
