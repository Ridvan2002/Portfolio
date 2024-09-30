import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Conditionally set the base for production and development
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/', // Use '/Portfolio/' for production (GitHub Pages) and '/' for local dev
});
