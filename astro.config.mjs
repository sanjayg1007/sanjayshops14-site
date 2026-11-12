import { defineConfig } from "astro/config";

export default defineConfig({
  // Change this to your real domain once you buy it
  site: "https://yourname.com",
  output: "static",
  build: {
    format: "file",
    inlineStylesheets: "always", // CSS goes inside the page: one less request
  },
  compressHTML: true,
});
