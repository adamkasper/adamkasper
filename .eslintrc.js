module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue-scoped-css/all',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'import/newline-after-import': ['warn'],
    'vue/component-name-in-template-casing': ['warn', 'kebab-case'],
    'vue-scoped-css/require-v-deep-argument': 0,
    'vue-scoped-css/no-deprecated-v-enter-v-leave-class': 0,
  },
}
