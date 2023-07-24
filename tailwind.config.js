/** @type {import('tailwindcss').Config} */

const { pxToRemPair: pxToRemPairHelper } = require('@captaincss/captaincss/helpers')

const baseFontSize = 16
const pxToRemPair = (px) => {
  return pxToRemPairHelper(px, baseFontSize)
}

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'ui-serif'],
      Tektur: ['Tektur', 'ui-serif'],
    },

    extend: {
      colors: {
        black: 'lab(8 -1 -2)',
        black600: 'lab(8 -1 -2 / .6)',
        gray: 'lab(90 -2 -5)',
        gray800: 'lab(13 -0 0)',
        gray700: 'lab(68 -3 -7)',
        'gray700-600': 'lab(68 -3 -7 / .6)',
        darkGray: 'lab(16 -1 -3)',
        darkGray800: 'lab(16 -1 -10)',
        violet: 'lab(47 38 -82)',
        violet800: 'lab(90 5 -14)',
        violet600: 'lab(63 22 -58)',
        white: 'lab(100 -0 0)',
        lightGreen: 'lab(93 -21 11)',
        green: 'lab(60 -42 20)',
        darkBlue: 'lab(38 33 -70)',
        error: 'lab(73 41 19)',
      },
      padding: {
        'header-b-size-desktop': '88px',
        'header-b-size-mobile': '64px'
      }
    },

    fontSize: {
      ...pxToRemPair(12),
      ...pxToRemPair(14),
      ...pxToRemPair(16),
      ...pxToRemPair(18),
      ...pxToRemPair(20),
      ...pxToRemPair(22),
      ...pxToRemPair(24),
      ...pxToRemPair(32),
      ...pxToRemPair(42),
      ...pxToRemPair(52)
    }
  },
  plugins: []
}
