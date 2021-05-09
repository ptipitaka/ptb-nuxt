import theme from '@nuxt/content-theme-docs'

export default theme({
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'พระไตรปิฎกฉบับสำหรับประชาชน',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&display=swap"
      }
    ]
  },
  docs: {
    primaryColor: '#E24F55'
  },
  loading: { color: '#00CD81' },
  i18n: {
    locales: () => [{
      code: 'th',
      iso: 'th-TH',
      file: 'th-TH.js',
      name: 'Thai'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'th'
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/main.css',
  ],
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  }
})


