import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://blitztext.timintech.de',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // 404 ist keine indexierbare Seite
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    // saubere /pfad/index.html-Ausgabe für statisches Hosting am Domain-Root
    format: 'directory',
  },
});
