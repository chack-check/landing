module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    '@nuxt/eslint-config',
    'plugin:vue/vue3-recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'vue/multi-word-component-names': ['off']
  },
  parserOptions: {
    project: './tsconfig.json'
  }
}
