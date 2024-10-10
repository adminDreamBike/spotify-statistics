import path from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    environment: "jsdom",
    setupFiles: ["vitestSetup.ts"],
    coverage: {
      provider: "istanbul", // or 'v8'
      reporter: ["text", "json", "html"],
    },
  },
});
