// https://nuxt.com/docs/api/configuration/nuxt-config

const BASE_URL = process.env.NUXT_BASE_URL

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', href: 'favicon.svg' },
        { rel: 'mask-icon', href: 'favicon.svg', color: '#FFFFFF' },
        { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }
      ]
    }
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    'nuxt-icons',
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@vueuse/nuxt'
  ],
  googleFonts: {
    families: {
      Inter: true
    },
    display: 'swap',
    preload: true,
    download: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  i18n: {
    baseUrl: BASE_URL,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json'
      },
      {
        code: 'ru',
        iso: 'en-RU',
        file: 'ru-RU.json'
      }
    ],
    strategy: 'prefix',
    defaultLocale: 'ru',
    lazy: true,
    langDir: 'lang',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_language',
      alwaysRedirect: true
    }
  }
})
