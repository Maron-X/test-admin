export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PersonX Admin Panel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      'data-theme': 'forest',
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~static/fontaswesome/css/all.min.css",
    "~static/transition.css",
    "~static/fontaswesome/css/fontawesome.min.css",
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

    '~/plugins/mixins'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/color-mode",
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    "vue-toastification/nuxt",

    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyA2HiaA6qhtzyjjH6wC0BVqeOJlAPEsHNI",
          authDomain: "personx-clients.firebaseapp.com",
          projectId: "personx-clients",
          storageBucket: "personx-clients.appspot.com",
          messagingSenderId: "404892688464",
          appId: "1:404892688464:web:962751c543da7a488ef155",
          measurementId: "G-THXDFE5QPW"
        },
        services: {
          firestore: true,
          database: true,
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false, // default
          }, // Just as example. Can be any other service.

        }
      }
    ],


  ],

  layout: 'panel',

  router: {
    middleware: 'auth'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },


  toast: {
    // Vue Toastification plugin options
    position: "bottom-center",
    transition: "Vue-Toastification__fade",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },


  generate: {
    fallback: true,
    dir: 'dist'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
