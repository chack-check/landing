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
      Inter: ['Inter', 'ui-sans-serif'],
      Tektur: ['Tektur', 'ui-monospace'],
    },

    extend: {
      content: {
        mailDarkIcon: 'url("/assets/icons/mail-dark.svg")',
        mailLightIcon: 'url("/assets/icons/mail-light.svg")',
      },
      colors: {
        // Bullshit
        black: 'lab(8 -1 -2)',
        black600: 'lab(8 -1 -2 / .6)',
        gray: 'lab(90 -2 -5)',
        gray800: 'lab(13 -0 0)',
        gray700: 'lab(68 -3 -7)',
        'gray700-800': 'lab(68 -3 -7 / .8)',
        'gray700-600': 'lab(68 -3 -7 / .6)',
        gray600: 'lab(85 -1 -3)',
        gray400: 'lab(67 -1 -7)',
        gray300: 'lab(98 -0 -1)',
        darkGray: 'lab(16 -1 -3)',
        darkGray800: 'lab(16 -1 -10)',
        'darkGray800-300': 'lab(16 -1 -10 / .8)',
        darkGray600: 'lab(36 -1 -10)',
        darkGray400: 'lab(48 -0 -9)',
        darkGray200: 'lab(27 -1 -11)',
        violet: 'lab(47 38 -82)',
        'violet-100': 'lab(47 38 -82 / .1)',
        violet800: 'lab(90 5 -14)',
        violet600: 'lab(63 22 -58)',
        white: 'lab(100 -0 0)',
        lightGreen: 'lab(93 -21 11)',
        green: 'lab(60 -42 20)',
        darkBlue: 'lab(38 33 -70)',
        primaryBlue800: 'lab(40 23 -75)',
        primaryBlue600: 'lab(45 22 -79)',
        error: 'lab(73 41 19)',
      },
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
