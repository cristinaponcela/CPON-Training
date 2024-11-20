// eslint.config.js
export default [
  {
      files: ["src/**/*.{js, ts, mjs, json}"],
      ignores: ["**/*.config.js", "!**/eslint.config.js"],
      rules: {
          semi: "error"
      }
  }
];