<template>
  <div :class="colorMode.value">
    <div class="theme-buttons">
      <button
        @click="setTheme('light')"
        :class="['theme-button light', { active: colorMode.value === 'light' }]"
      >
        {{ t('modes.light') }}
      </button>
      <button
        @click="setTheme('dark')"
        :class="['theme-button dark', { active: colorMode.value === 'dark'}]"
      >
        {{ t('modes.dark') }}
      </button>
      <button
        @click="setTheme('sepia')"
        :class="['theme-button sepia', { active: colorMode.value === 'sepia'}]"
      >
        {{ t('modes.sepia') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { t } = useI18n()
  const colorMode = useColorMode()

  // Função para definir o tema
  const setTheme = (theme: string) => {
    colorMode.preference = theme
  }
</script>

<style scoped lang="scss">
.theme-buttons {
  display: flex;
  gap: 8px;
}
</style>
