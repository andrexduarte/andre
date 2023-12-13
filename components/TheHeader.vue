
<template>
    <header class="the-header">
        <div class="content">
            <slot></slot>

            <hgroup class="title-group">
                <h1> {{ $siteName }}</h1>
                <h2>
                    {{ $siteDesc }}
                </h2>
                
            </hgroup>
        </div>
    </header>
</template>
