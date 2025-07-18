import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is crucial for GitHub Pages to resolve paths correctly
  base: "./",
  build: {
    // Change output directory from 'dist' to 'docs'
    outDir: "docs",
  },
});
