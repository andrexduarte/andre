<script setup>
const { t, locale } = useI18n()

// Computed para meta tags
const metaTitle = computed(() => t('meta.title'))
const metaDescription = computed(() => t('meta.description'))

useHead(() => ({
  title: 'André Duarte - Front-end developer VueJs | NuxtJs | WordPress | ReactJs',
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
}))
</script>


<template>

  <Home />

</template>


