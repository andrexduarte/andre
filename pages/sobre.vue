<script setup>
  const { t, locale } = useI18n()

  // Setting up localized meta tags
  const metaTitle = computed(() => t('meta.title'))
  const metaDescription = computed(() => t('meta.description'))
  useHead({
    title: 'Sobre | André Duarte - Front-end developer VueJs | NuxtJs | WordPress | ReactJs',
    htmlAttrs: {
      lang: locale.value,
    },
    meta: [
      {
        name: 'description',
        content: metaDescription.value
      },
      {
        property: 'og:title',
        content: metaTitle.value
      },
      {
        property: 'og:description',
        content: metaDescription.value
      },
      {
        property: 'og:locale',
        content: locale.value
      }
    ]
  })

</script>

<template>


    <main class="main">
      <div class="content">
        <Sobre></Sobre>
      </div>
    </main>

</template>


