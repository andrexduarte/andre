<template>
<div>
    <TheHead />
    <TheHeader>
        <div class="ilustra">
            <NuxtImg src="/img/ilustra_psd_slice.png" alt="imagem ilustrativa." />
            <span id="mouse"></span>
        </div>
    </TheHeader>

    <main>
        <div class="content">
            <article class="entry">
                <h2>Oi! Sou o André! ;)</h2>
                <p>
                    Sou desenvolver front-end focado na camada visual, trabalho com Wordpress, Angular, VueJs e já trabalhei com uma outra porção de frameworks e bibliotecas. Com experiência desde 2009 vi elas nascerem e morrerem.
                </p>
                <p>
                    Sou muito bom com CSS, meu HTML é semântico e acessível e meu JavaScript é razóavel. Tenho noções de SEO, Design e experiência suficiente para entender um pouco de como que tudo funciona.
                </p>
                <p>
                    <strong>Estou aberto para trabalhos de qualquer espécie.</strong>
                </p>
                <p>Você pode visitar o meu <NuxtLink :to="`${ $urlLinkedin }`">Linkedin</NuxtLink>, o meu <NuxtLink :to="`${ $urlInstagram }`">Instagram</NuxtLink> e ler o meu <NuxtLink to="/blog#inicio">blog</NuxtLink>.</p>
            </article>
        </div>

        <hr class="separator">

        <aside class="content">
            <div class="entry">
                <h2 class="align-center">Entra em contato!</h2>
                <p class="align-center">
                    Você pode entrar em contato por qualquer motivo, desde oferecer um trabalho ou até mesmo pedir um favor. Eu sou gente boa. Já falei que gosto de cavalos?
                </p>
                <p class="box">
                    <NuxtLink :to="`https://api.whatsapp.com/send?phone=${ $urlTel }`" title="Whattsapp e Telegram">{{ $tel }}</NuxtLink>
                    <NuxtLink :to="`mailto:${ $email }`">{{ $email }}</NuxtLink>
                </p>
            </div>
        </aside>
    </main>

    <TheFooter />
</div>
</template>

<style scoped>
    .align-center {
        text-align: center;
    }
    .box {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
</style>