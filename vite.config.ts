import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
        @import "./src/app/styles/variables.sass"
        @import "./src/app/styles/mixins.sass"
        `,
      },
    },
    // transformer: 'lightningcss'
  },
  build: {
    cssMinify: 'lightningcss'
  }
});
