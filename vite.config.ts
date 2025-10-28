import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // GitHub Pages base path
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // Ensure consistent asset naming for GitHub Pages
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Generate source maps for better debugging
    sourcemap: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
  },
})
