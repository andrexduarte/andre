// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/content', "@nuxt/image"],
  app: {
      baseURL: '/adx/' // baseURL: '/<repository>/'
  },
  css: [
    // SCSS file in the project
    "~/assets/style/main.scss", // you should add main.scss somewhere in your app
  ],

  plugins: [
    '~/plugins/globalVariables.js'
  ],
  ssr: true,
  experimental: {
      payloadExtraction: false
  },
  router: {
      options: {
          strict: false
      }
  },

  sourcemap: false,
  content: {
      // https://content.nuxtjs.org/api/configuration
      highlight: {
          theme: 'github-dark',
          preload: ['java','javascript']
      },
      markdown: {
          // https://github.com/rehypejs/rehype-external-links
          rehypePlugins: [
              [
                  'rehype-external-links',
                  {
                      target: '_blank',
                      rel: 'noopener noreferer'
                  }
              ]
          ]
      }
  }
})