import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://hp-autoservice-dortmund.de",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/impressum") && !page.includes("/datenschutz"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "directory",
  },
  compressHTML: true,
});
