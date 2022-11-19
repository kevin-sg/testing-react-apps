import EnvironmentPlugin from "vite-plugin-environment";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin("all")],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
