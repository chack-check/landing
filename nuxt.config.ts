// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

const IS_DEV = process.env.NODE_ENV === 'development';
const GTAG = IS_DEV ? 'G-XXXXXXXX' : process.env.NUXT_PUBLIC_GTAG_ID
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
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        }
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
        file: 'en-US.json',
        name: 'English'
      },
      {
        code: 'ru',
        iso: 'en-RU',
        file: 'ru-RU.json',
        name: 'Русский'
      }
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    lazy: true,
    langDir: 'lang',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },
  imports: {
    dirs: [
      'utils/**'
    ]
  }
})
