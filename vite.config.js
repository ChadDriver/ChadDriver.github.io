import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'Drive' with your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/Drive/', // This ensures correct paths for GitHub Pages
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
  }
});
