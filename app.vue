<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'pt-br'
  },
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'shortcut icon',
      href:'/img/favicon.ico'
    }
  ],
  meta: [
    { name: 'google-site-verification', content: 'YVI_41zFhvXmgSLPyz8qPkIScAyVifdLiO4wIvp62m4' }
  ]

})
</script>
