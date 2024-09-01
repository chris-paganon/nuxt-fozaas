// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  modules: [
    '@primevue/nuxt-module'
  ],
  devtools: { enabled: true },
  primevue: {
    autoImport: true,
  }
})
