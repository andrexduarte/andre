<template>
    <TheHeader class="header-blog">
        <div class="ilustra">
            <NuxtImg src="/img/ilustra_psd_slice.png" alt="imagem ilustrativa." />
        </div>
    </TheHeader>

    <main id='inicio'>
        <div class="content">
            <article class="entry">
                <ContentDoc>
                    <template v-slot="{ doc }">
                        <Section id="blog-title" type="header">
                            <div>
                                <!-- Breadcrumbs -->
                                <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="breadcrumb">
                                    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                        <NuxtLink itemprop="item" :to="`${ $urlSite }`">
                                            <span itemprop="name">Home</span>
                                        </NuxtLink>
                                        <meta itemprop="position" content="1" />
                                    </li>
                                    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                        <NuxtLink
                                            itemscope
                                            itemtype="https://schema.org/WebPage"
                                            itemprop="item"
                                            itemid="/blog/"
                                            to="/blog#inicio"
                                        >
                                            <span itemprop="name">Blog</span>
                                        </NuxtLink>
                                        <meta itemprop="position" content="2" />
                                    </li>
                                    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                        <span itemprop="name">{{ doc.headline }}</span>
                                        <meta itemprop="position" content="3" />
                                    </li>
                                </ol>
                            </div>

                            <!-- Headline -->
                            <h1 class="entry-title">
                                {{ doc.headline }}
                            </h1>

                            <div class="post-info">
                                <!-- Author -->
                                <span class="post-by">
                                    Por
                                    <a :href="doc.authorUrl" target="_blank" rel="noopener noreferrer">
                                        {{ doc.author }}
                                    </a>. 
                                </span>
                                    <!-- Publish date -->
                                <span class="post-date">
                                    {{ $formatDate(doc.date) }}
                                </span>
                            </div>
                        </Section>
                        <!-- Content -->
                        <Section id="main">

                            <article class="prose col-span-full md:col-span-7 relative">
                                <!-- Update date -->
                                <span
                                    v-show="doc.dateUpdated"
                                    class="italic absolute -top-8 text-sm leading-sm font-light text-typography_primary/75 dark:text-typography_primary_dark/75"
                                    >(Updated: {{ $formatDate(doc.dateUpdated) }})</span
                                >
                                <!-- Blog content -->
                                <ContentRenderer :value="doc" class="blog-content blog-post-text" />
                            </article>
                           
                        </Section>

                    </template>
                    <!-- Error in case not found -->
                    <template #not-found>
                        <SectionsError />
                    </template>
                </ContentDoc>
            </article>
        </div>
    </main>
    <TheFooter />
</template>

<script setup>
const { $formatDate } = useNuxtApp();
const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, '');
const { data, error } = await useAsyncData(`content-${cleanPath}`, async () => {
    // Remove a trailing slash in case the browser adds it, it might break the routing
    // fetch document where the document path matches with the cuurent route
    let article = queryContent('/blog').where({ _path: cleanPath }).findOne();
    // get the surround information,
    // which is an array of documeents that come before and after the current document
    let surround = queryContent('/blog').sort({ date: -1 }).only(['_path', 'headline', 'excerpt']).findSurround(cleanPath, { before: 1, after: 1 });
    return {
        article: await article,
        surround: await surround
    };
});

// Get the authors
const { data: authorData } = await useAsyncData('home', () => queryContent('/authors').findOne());

// Set the meta
const baseUrl = 'https://andrexduarte.github.io/adx/blog/';
const canonicalPath = baseUrl + (path + '/').replace(/\/+$/, '/');
const image = baseUrl + (data.value?.article?.socialImage.src || '/sample.webp');

// JSON+LD
const jsonScripts = [
    {
        type: 'application/ld+json',
        children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://andrexduarte.github.io/adx/blog/'
            },
            url: canonicalPath,
            image: image,
            headline: data.value?.article?.headline,
            abstract: data.value?.article?.excerpt,
            datePublished: data.value?.article?.date,
            dateModified: data.value?.article?.dateUpdated || data.value?.article?.date,
            author: authorData.value[data.value?.article?.author],
            publisher: authorData.value['André Duarte']
        })
    }
];
useHead({
    title: data.value?.article?.title,
    meta: [
        { name: 'author', content: data.value?.article?.author },
        { name: 'description', content: data.value?.article?.description },
        { property: 'article:published_time', content: data.value?.article?.date.split('T')[0] },
        // OG
        { hid: 'og:title', property: 'og:title', content: data.value?.article?.headline },
        { hid: 'og:url', property: 'og:url', content: canonicalPath },
        { hid: 'og:description', property: 'og:description', content: data.value?.article?.description },
        { hid: 'og:image', name: 'image', property: 'og:image', content: image },
        { hid: 'og:type', property: 'og:type', content: 'Article' },
        { hid: 'og:image:type', property: 'og:image:type', content: `image/${data.value?.article?.socialImage.mime}` },
        { hid: 'og:image:width', property: 'og:image:width', content: data.value?.article?.socialImage.width || 190 },
        { hid: 'og:image:height', property: 'og:image:height', content: data.value?.article?.socialImage.height || 190 },
        { hid: 'og:image:alt', property: 'og:image:alt', content: data.value?.article?.socialImage.alt },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'Summary' },
        { hid: 'twitter:title', name: 'twitter:title', content: data.value?.article?.headline },
        { hid: 'twitter:url', name: 'twitter:url', content: canonicalPath },
        { hid: 'twitter:description', name: 'twitter:description', content: data.value?.article?.description },
        { hid: 'twitter:image', name: 'twitter:image', content: image },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: data.value?.article?.socialImage.alt }
    ],
    link: [
        {
            hid: 'canonical',
            rel: 'canonical',
            href: canonicalPath
        }
    ],
    script: jsonScripts
});
</script>
