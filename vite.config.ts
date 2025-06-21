import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/lib/Widget.svelte",
      name: "ChatWidget",
      fileName: "qcw",
      formats: ["iife"],
    },
    // outDir: 'build',
  },
  plugins: [svelte()],
});
