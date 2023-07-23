// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

const BASE_URL = process.env.NUXT_BASE_URL

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'assets/css/main.css',
    'element-plus/dist/index.css'
  ],
  vite: {
    plugins: [svgLoader()]
  },
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
    '@vueuse/nuxt',
    'nuxt-icons',
    '@nuxt/content',
    'nuxt-swiper',
    'nuxt-lodash'
  ],
  elementPlus: {
    importStyle: false,
  },
  tailwindcss: {
    injectPosition: 'first'
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800],
      'Architects+Daughter': [400]
    },
    display: 'swap',
    preload: true,
    download: true
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      'postcss-preset-env': {
        features: { 'nesting-rules': false }
      },
      'postcss-pxtorem': {
        propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'inline-size', 'block-size']
      }
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
  },
  imports: {
    dirs: [
      'utils/**'
    ]
  }
})
