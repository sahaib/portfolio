import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://work.sahaibsingh.com',
  integrations: [
    react(), 
    tailwind()
  ],
  vite: {
    build: {
      // Force clean build every time
      emptyOutDir: true,
    },
  }
}); 