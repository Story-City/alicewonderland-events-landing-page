import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import markdoc from '@astrojs/markdoc'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), markdoc()],
  build: {
    // Inline page CSS so Lighthouse does not flag a blocking `/_astro/*.css` request.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
