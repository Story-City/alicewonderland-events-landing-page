import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc()],
  redirects: {
    '/chicago': '/',
    '/chicago/reviews': '/',
  },
  build: {
    // Inline page CSS so Lighthouse does not flag a blocking `/_astro/*.css` request.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
