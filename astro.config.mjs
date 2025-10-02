// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel"; 

// https://astro.build/config
export default defineConfig({
  output: "server",   // karena kamu pakai API
  adapter: vercel(),  // aktifkan adapter vercel
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), react()],
});
