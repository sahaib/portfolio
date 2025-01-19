import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  site: 'https://work.sahaibsingh.com',
  integrations: [react(), tailwind()]
}); 