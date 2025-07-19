import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Import the plugin
import injectSeoMetaTagsPlugin from "./vite-plugin-seo-meta";
// Import your SEO configuration
import { seoConfig } from "./src/constants/seoConfig";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), injectSeoMetaTagsPlugin(seoConfig)],
  // This is crucial for GitHub Pages to resolve paths correctly
  base: "./",
  build: {
    // Change output directory from 'dist' to 'docs'
    outDir: "docs",
  },
});
