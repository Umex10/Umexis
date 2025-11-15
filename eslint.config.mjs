import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      // include both browser and node globals so config/build files (tailwind.config.js) lint cleanly
      globals: { ...globals.browser, ...globals.node },
    },
  },
]);
