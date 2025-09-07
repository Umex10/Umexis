import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        // Necassary for esLint so we can specify, that 'module' inside tailwind.config.js is actually defined
        ...globals.browser, // for browser environment
        ...globals.node     // for node environment
      }
    }
  }
]);