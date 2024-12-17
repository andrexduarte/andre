<template>
  <strong class="identifier">
    <span v-html="wrapLetters($t('hero'))"></span>
  </strong>
</template>

<script>
export default {
  methods: {
    wrapLetters(text) {
      return text
        .split('') 
        .map(letter => `<span>${letter}</span>`)
        .join('');
    }
  }
}
</script>
