/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { watch } from "vite-plugin-watch";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
    }),
    watch({
      pattern: "./posts/**/*.{mdx,md}",
      command: "contentlayer build",
    }),
  ],
  resolve: {
    alias: {
      "contentlayer/generated": "/.contentlayer/generated",
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
