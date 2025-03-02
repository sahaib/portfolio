import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  output: 'static',
  site: 'https://work.sahaibsingh.com',
  adapter: vercel({
    analytics: true,
    webAnalytics: {
      enabled: true,
    },
    isr: {
      // Enable Incremental Static Regeneration
      expiration: 60, // 60 seconds
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