import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), tailwind(), react()],
  output: "hybrid",
  adapter: vercel()
});