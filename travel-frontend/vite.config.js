import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false, // Set to false if the backend uses HTTP
        ws: true,      // Enable WebSocket proxying
      },
    },
    port: 5173, // Vite Dev server port
    strictPort: true, // Ensures it doesn't switch ports
    hmr: {
      protocol: 'ws', // Ensures WebSocket protocol is used
      host: 'localhost',
      port: 5173, // Ensure it matches the dev server
      clientPort: 5173, // Add clientPort to fix mismatched WebSocket issues
    },
    cors: true, // Allow cross-origin requests
  },
  optimizeDeps: {
    exclude: ['some-unused-module'], // Remove any unused problematic modules
  },
})
