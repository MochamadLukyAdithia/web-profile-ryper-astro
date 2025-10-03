// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel"; 

// https://astro.build/config
export default defineConfig({
  site: "https://ryperlabfasilkomunej.vercel.app",
  output: "server",   
  adapter: vercel(),  
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), react()],
});
