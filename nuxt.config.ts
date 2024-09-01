import Lara from '@primevue/themes/lara';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  modules: ['@primevue/nuxt-module'],
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
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
});
