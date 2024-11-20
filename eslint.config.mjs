import eslintPluginReact from 'eslint-plugin-react';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';

export default {
  ignores: ['node_modules/'], // Files and folders to ignore
  files: ['**/*.ts', '**/*.tsx'], // Specify the files to lint
  languageOptions: {
    ecmaVersion: 2020, // Support for modern JavaScript
    sourceType: 'module', // Enable ES module syntax
    parser: typescriptEslintParser, // Use the TypeScript parser
  },
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
    react: eslintPluginReact,
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
  rules: {
    'no-console': 'warn', // Warn for console statements
    '@typescript-eslint/no-unused-vars': ['error'], // Error for unused variables
  },
};
