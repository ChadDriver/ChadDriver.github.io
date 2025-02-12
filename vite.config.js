import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'Drive' with your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/Drive/', // This is required for GitHub Pages deployment
  server: {
    host: '0.0.0.0',
  }
});
