import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "node:path";
import { name } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), dts()],
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name,
      formats: ["es", "umd"],
      fileName: (format) => `${name}.${format}.js`,
    },

    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom", "jotai"],
      output: {
        globals: {
          react: "React",
          jotai: "jotai",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
