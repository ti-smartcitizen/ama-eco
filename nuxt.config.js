export default {
  target: 'static',
  head: {
    title: 'AMA | Agentes do Meio Ambiente',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Formamos uma rede colaborativa que multiplica comportamentos sustentáveis. A rede social AMA conecta, educa, conscientiza e engaja os moradores a adotarem comportamentos mais sustentáveis em seu dia a dia.',
      },
      { hid: 'og:image', name: 'og:image', content: '/favicon.ico' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;700;800;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap',
      },
    ],
  },
  css: [
    '~/assets/css/base.css',
    '~/assets/css/global.scss',
    '~/assets/css/header.scss',
    '~/assets/css/footer.scss',
    '~/assets/css/hero.scss',
    '~/assets/css/contact.scss',
    '~/assets/css/howWork.scss',
  ],
  plugins: [{ src: '~/plugins/vue-the-mask' }, { src: '~/plugins/vue-gtag' }],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { workbox: false }],
    ['nuxt-cookie-control', {}],
    'nuxt-vuex-localstorage',
  ],
  axios: {},
  bootstrapVue: {
    icons: true,
  },
  pwa: {
    manifest: {
      lang: 'pt-BR',
      name: 'AMA | Agentes do Meio Ambiente',
    },
    meta: {
      mobileAppIOS: true,
    },
  },
  router: {},
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    babel: {
      compact: true,
    },
  },
}
