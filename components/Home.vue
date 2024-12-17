<template>
  <div class="hero">
    <div class="profile">
      <nuxt-img
        src="/images/profile.jpeg"
        width="48px"
        height="48px"
        class="profile-img"
        alt="André Duarte - Front-end developer"
      />
    </div>

    <h1 class="title">
      <span class="border-bottom">{{ $t('message') }}</span>
      <strong class="identifier" v-html="wrapLetters($t('hero'))"></strong>
    </h1>

    <p class="desc">
      {{ $t('desc') }}
    </p>
  </div>
</template>

<script setup>
  const { t } = useI18n()

  const wrapLetters = (text) => {
    return text
      .split(' ')
      .map((word, wordIndex) => {
        const letters = word
          .split('')
          .map((letter, letterIndex) => 
            `<span class="letter" style="animation-delay: ${(wordIndex * 0.5 + letterIndex * 0.1)}s">${letter}</span>`)
          .join('') 
        return `<span class="word">${letters}</span>`
      })
      .join(' ') 
  }
</script>

<style>
  .identifier .letter {
    display: inline-block;
    opacity: 0;
    transform: translateY(-20px);
    animation: fadeIn 0.5s forwards;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>