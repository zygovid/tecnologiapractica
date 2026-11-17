import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tecnologiapractica.com',
  output: 'static',
  integrations: [sitemap()],
  image: {
    responsiveStyles: true,
  },
});
