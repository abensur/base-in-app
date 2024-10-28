// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  future: { compatibilityVersion: 4 },
  
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts'
  ],
  hub: {
    database: true,
    kv: true,
    blob: true,
    cache: true,
  },
  nitro: {
    experimental: {
      openAPI: true
    }
  },
  devtools: { enabled: true },
})
