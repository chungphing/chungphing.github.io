
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Abel|Anton|Basic|Cairo|Ropa+Sans' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Assistant:200|Catamaran:200'}
    ]
  },
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

