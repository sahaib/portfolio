import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  site: 'https://work.sahaibsingh.com',
  adapter: vercel({
    analytics: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    react(), 
    tailwind()
  ],
  vite: {
    build: {
      // Force clean build every time
      emptyOutDir: true,
    },
    // Add cache control headers
    server: {
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=60, stale-while-revalidate=86400'
      }
    }
  }
}); 