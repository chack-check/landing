/** @type {import('tailwindcss').Config} */

const { pxToRemPair: pxToRemPairHelper } = require('@captaincss/captaincss/helpers');

const baseFontSize = 18;
const pxToRemPair = (px) => {
  return pxToRemPairHelper(px, baseFontSize);
};

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
    extend: {
      colors: {
        black: 'lab(8 -1 -2)',
        gray: 'lab(90 -2 -5)',
        gray800: 'lab(13 -0 0)',
        violet: 'lab(47 38 -82)',
        white: 'lab(100 -0 0)'
      }
    },

    fontSize: {
      ...pxToRemPair(12),
      ...pxToRemPair(14),
      ...pxToRemPair(16),
      ...pxToRemPair(18),
      ...pxToRemPair(22),
    }
  },
  plugins: []
}
