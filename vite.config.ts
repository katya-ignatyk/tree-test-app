import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      api: path.resolve(__dirname, "src/api"),
      lib: path.resolve(__dirname, "src/lib"),
      pages: path.resolve(__dirname, "src/pages"),
      components: path.resolve(__dirname, "src/components"),
    },
  },
  json: {
    stringify: true,
  },
});
