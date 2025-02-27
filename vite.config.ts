import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ensure environment variables are loaded
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: Number(process.env.VITE_PORT) || 3000, // Fallback to 3000 if not set
    host: true,
  },
});
