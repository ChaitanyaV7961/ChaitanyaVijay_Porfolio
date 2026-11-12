import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://chaitanyav7961.github.io",
  base: "/ChaitanyaVijay_Porfolio",
  integrations: [sitemap()],
  output: "static"
});
