import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@coolui/core": path.resolve(__dirname, "../../packages/core/src"),
      "@coolui/theme": path.resolve(__dirname, "../../packages/theme/src")
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom"]
  }
})
