import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bruce-automation.github.io',
  base: '/signal-ia',
  integrations: [sitemap()],
});
