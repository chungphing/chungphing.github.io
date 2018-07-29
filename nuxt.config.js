
const routerBase = process.env.DEPLOY_ENV === 'MASTER' ? {
  router: {
    base: '/chungphing-site/'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'chungphing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Developer in Cambodia' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Assistant:200|Catamaran:200'}
    ]
  },
//      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Abel|Anton|Basic|Cairo|Ropa+Sans' },


  // css: [
  //   // CSS file in the project
  //   '@/assets/styles/variables.scss'
  //   // SCSS file in the project
  // ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#128de0' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~/plugins/vueSmoothScroll']
}

