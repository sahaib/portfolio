import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { node } from '@astrojs/node';

export default defineConfig({
  output: 'server',
  site: 'https://work.sahaibsingh.com',
  integrations: [react(), tailwind()],
  vite: {
    build: {
      // Force clean build every time
      emptyOutDir: true,
    },
  },
  adapter: node({
    mode: 'standalone'
  })
}); 