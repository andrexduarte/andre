
<template>
  <div class="page">
    <header class="header">
      <Menu />
    </header>
    
    <main>
      <div class="content">
        <NuxtPage />
      </div>
    </main>

    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<style>
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>