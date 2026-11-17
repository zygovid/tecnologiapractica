import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tecnologiapractica.com',
  output: 'static',
  integrations: [sitemap({ filter: (page) => page !== 'https://tecnologiapractica.com/410/' })],
  image: {
    responsiveStyles: true,
  },
});
