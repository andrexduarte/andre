<template>
    <ul class="post-list">
        <li
            v-for="article in data"
            :key="article._path"
            class="post-list-item"
        >
            <NuxtLink :to="article._path + '/#inicio'">
                <div class="wrapper">
                    <header>
                        <h2>
                            {{ article.headline }}
                        </h2>
                        <p>
                            {{ $formatDate(article.date) }}
                        </p>
                        <p>{{ article.excerpt }}</p>
                    </header>
                </div>
            </NuxtLink>
        </li>
    </ul>
    <p v-if="data.length == 0">{{message}}</p>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    message: {
        type: String,
        default: "There are no posts right now, but stay tuned for newer releases in the future."
    }
});
const { $formatDate } = useNuxtApp();
</script>

<style scoped>
    .entry li a {
        color: #000;
    }
</style>
