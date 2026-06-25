import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Base path is dynamic:
// - Lovable Preview / dev / Lovable Publish: "/"
// - GitHub Pages build (workflow sets VITE_BASE=/teambeestudio/): "/teambeestudio/"
const base = process.env.VITE_BASE || "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  },
  server: { host: "::", port: 8080 },
});
