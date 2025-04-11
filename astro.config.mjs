import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), react()],
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough",
    mode: "directory",
  }),
});
