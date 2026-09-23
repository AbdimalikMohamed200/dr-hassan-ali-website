import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  root: "app",
  publicDir: "../public",
  server: {
    fs: {
      allow: [".."],
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
