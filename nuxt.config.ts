import Lara from '@primevue/themes/lara';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    '@nuxt/eslint',
    'nuxt-security',
  ],
  css: ['primeicons/primeicons.css', '@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: Lara,
        options: {
          cssLayer: {
            name: 'primevue',
            order: 'reset, primevue, tailwind-utilities',
          },
        },
      },
    },
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        'script-src': [
          "'self'",
          'https:',
          "'unsafe-inline'",
          "'unsafe-eval'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'",
        ],
      },
    },
    xssValidator: false,
  },
});
