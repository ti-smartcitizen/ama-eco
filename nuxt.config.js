export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AMA | Agentes do Meio Ambiente',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Uma rede social que conecta pessoas interessadas no compromisso global de desenvolvimento sustentável',
      },
      { hid: 'og:image', name: 'og:image', content: '/favicon.ico' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Exo+2:wght@100;400;500;700;800;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/base.css',
    '~/assets/css/global.scss',
    '~/assets/css/header.scss',
    '~/assets/css/footer.scss',
    '~/assets/css/hero.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/google-maps', ssr: true },
    { src: '~/plugins/vue-the-mask' },
    { src: '~/plugins/vue-gtag' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'nuxt-cookie-control',
      {
        // your options
      },
    ],
    'nuxt-vuex-localstorage', //
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  bootstrapVue: {
    icons: true,
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt-BR',
      name: 'AMA | Agentes do Meio Ambiente',
    },
    meta: {
      mobileAppIOS: true,
    },
  },

  router: {
    // base: '/new/',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    babel: {
      compact: true,
    },
  },
}
