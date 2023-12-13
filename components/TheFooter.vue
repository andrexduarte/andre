<template>
    <footer class="the-footer">
        <hr class="separator">

        <div class="content">
            <small class="license">
                <img src="/img/icon-passaro.png"> © Nenhum direito reservado.<br> Feito com NuxtJs. <NuxtLink :to="`${ $urlInstagram }`" target="_blank">André Duarte</NuxtLink> 2023.
            </small>
        </div>
    </footer>
</template>

<style lang="scss">
    .license {
        display: block;
        margin: 50px 0;
        text-align: center;
        font-size: 14px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        img {
            margin: 0 15px 0 10px;
        }
    }
</style>