import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Import the plugin
import injectSeoMetaTagsPlugin from "./vite-plugin-seo-meta.js";
// Import your SEO configuration
import { seoConfig } from "./src/constants/seoConfig";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), injectSeoMetaTagsPlugin(seoConfig)],
  // This is crucial for GitHub Pages to resolve paths correctly
  base: "./",
  build: {
    // Change output directory from 'dist' to 'docs'
    outDir: "docs",
  },
});
