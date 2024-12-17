<template>
  <nav class="menu">
    <ul>
      <li>
        <NuxtLink 
          href="/" 
          class="menu-item" 
          :class="{ active: route.path === '/' }"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink 
          href="/sobre" 
          class="menu-item" 
          :class="{ active: route.path === '/sobre' }"
        >
          {{ $t('page') }}
        </NuxtLink>
      </li>
    </ul>

    <ColorMode class="color-mode" />

  </nav>
</template>

<script setup>
const route = useRoute()
const { t, locale } = useI18n()

</script>

<style>


</style>
