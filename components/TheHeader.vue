<template>
    <header class="the-header">
        <div class="content">
            <slot></slot>

            <hgroup class="title-group">
                <h1>
                    <NuxtLink href="/">
                        {{ $siteName }}
                    </NuxtLink>
                </h1>
                <h2>
                    {{ $siteDesc }}
                </h2>
            </hgroup>
            
            <a href="#inicio" id="mouse">desce</a>

        </div>
    </header>
</template>
