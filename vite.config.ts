import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

console.log("VITE config ");

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});


