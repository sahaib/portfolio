import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  site: process.env.HEROKU_APP_NAME 
    ? `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`
    : 'https://sahaib-portfolio-9ba1759077cd.herokuapp.com',
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