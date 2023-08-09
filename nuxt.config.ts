export default defineNuxtConfig({
  app: {
    baseURL: '/iirem/'
  },

  css: ['~/assets/styles/main.scss'],

  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ]
})
