import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  server: { 
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 4321 
  }
})