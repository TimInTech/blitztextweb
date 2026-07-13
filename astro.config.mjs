import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Auslieferung als GitHub-Pages-Project-Page unter
// https://timintech.github.io/blitztextweb/ (Unterpfad, kein Domain-Root).
export default defineConfig({
  site: 'https://timintech.github.io',
  base: '/blitztextweb',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // 404 ist keine indexierbare Seite
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    // saubere /pfad/index.html-Ausgabe für statisches Hosting
    format: 'directory',
  },
});
