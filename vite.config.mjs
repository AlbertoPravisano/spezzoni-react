import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      api: resolve(__dirname, "src/api"),
      common: resolve(__dirname, "src/common"),
      components: resolve(__dirname, "src/components"),
      routes: resolve(__dirname, "src/routes.js"),
      views: resolve(__dirname, "src/views"),
    },
  },
});
