import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "./src/features/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    outDir: resolve(__dirname, "./dist-lib"),
    rollupOptions: {
      output: {
        preserveModules: true,
      },
      external: ["react", "react-dom"],
    },
  },
});
