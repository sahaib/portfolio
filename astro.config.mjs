import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
    runtime: 'nodejs20.x'
  }),
  site: 'https://work.sahaibsingh.com',
  integrations: [react(), tailwind()]
}); 