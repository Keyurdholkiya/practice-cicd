import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
const globals = require("globals");

module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
];
export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
]);
