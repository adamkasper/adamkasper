export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Adam Kasper – Web development',
    htmlAttrs: {
      lang: 'cs',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Kompletní dodání webových řešení. Zajistím Vám vše od tvorby wireframů, grafického návrhu, přes vývoj a deployment, až po marketing a následnou správu systému.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/tailwind'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxtjs/tailwindcss',
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
  ],

  sitemap: {
    hostname: 'https://adamkasper.cz',
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: {
      ignoreOrder: true,
    },
    html: {
      minify: {
        minifyCSS: true,
        minifyJS: true,
        useShortDoctype: true,
      },
    },
  },
}
