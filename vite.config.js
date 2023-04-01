import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/css/tailwind.css", "resources/js/site.js"],
      refresh: true,
    }),
    VitePWA({
      registerSW: true,
      registerType: "autoUpdate",
      injectRegister: "script",
      manifest: {
        name: "Jason Tame",
        short_name: "Jason Tame",
        theme_color: "#2d3748",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/images/manifest/manifest-icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "/images/manifest/manifest-icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
          },
        ],
      },
      workbox: {
        // Only precache these files - html should be excluded
        globPatterns: ["**/*.{js,css}"],

        // Don't fallback on document based (e.g. `/some-page`) requests
        // Even though this says `null` by default, I had to set this specifically to `null` to make it work
        navigateFallback: null,
      },
    }),
  ],
});
