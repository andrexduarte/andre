<template>
    <Section id="blog">
        <div>
            <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="breadcrumb">
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <NuxtLink itemprop="item" to="/">
                        <span itemprop="name">Home</span>
                    </NuxtLink>
                    <meta itemprop="position" content="1" />
                </li>
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <span itemprop="name">Blog</span>
                    <meta itemprop="position" content="2" />
                </li>
            </ol>
        </div>
        
        <h1>Repositório de textos</h1>
        <p>
            Nos últimos nove anos eu escrevi alguns textos e publiquei nas minhas redes sociais. Esses textos estavam espalhados e "perdidos" na timeline. Por isso resolvi criar esse repositório e concentrar tudo que escrevi por aqui.
            Não tem nenhum texto técnico sobre tecnologia, por enquanto.
        </p>
        <hr class="separator">
    </Section>
</template>

<style scoped>
    .separator {
        margin: 50px auto;
    }
</style>
