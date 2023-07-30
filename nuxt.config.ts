// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

const GTAG = process.env.NUXT_PUBLIC_GTAG_ID
const BASE_URL = process.env.NUXT_BASE_URL

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'assets/css/fonts.css',
    'assets/css/main.css',
    'element-plus/dist/index.css',
    'assets/css/formkit.css',
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
    'nuxt-icons',
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    'nuxt-icons',
    '@nuxt/content',
    'nuxt-swiper',
    'nuxt-lodash',
    '@unlighthouse/nuxt',
    '@formkit/nuxt',
    'nuxt-gtag',
    '@nuxtjs/fontaine',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots'
    // '@nuxtjs/apollo'
  ],
  gtag: {
    id: GTAG,
    loadingStrategy: 'async',
    initialConsent: false,
  },
  elementPlus: {
    importStyle: false,
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    injectPosition: 'first'
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
      useCookie: false,
      redirectOn: 'root'
    }
  },
  imports: {
    dirs: [
      'utils/**'
    ]
  }
})
