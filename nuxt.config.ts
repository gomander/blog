// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/icon'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.bunny.net'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.bunny.net/css?family=besley:400,700'
        }
      ]
    }
  }
})
