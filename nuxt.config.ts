// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/styles.scss',
  ],
  modules: [
    '@pinia/nuxt',
  ]
})
