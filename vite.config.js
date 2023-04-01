import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/css/tailwind.css", "resources/js/site.js"],
      refresh: true,
    }),
    VitePWA(),
  ],
});
