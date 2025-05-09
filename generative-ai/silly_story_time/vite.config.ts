import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['html2canvas']
  },
  resolve: {
    alias: {
      'html2canvas': 'html2canvas'
    }
  },
  build: {
    commonjsOptions: {
      include: [/html2canvas/]
    }
  }
})
