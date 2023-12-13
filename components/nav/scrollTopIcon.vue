<template>
    <div
        :class="[
            'button-fixed',
            isVisible ? '' : 'translate-x-full'
        ]"
    >
        <a href="#" aria-label="Scroll to Top" class="">
            Voltar ao topo
            <IconsArrowUp class="w-4 h-4" width="16" height="16"/>
        </a>
    </div>
</template>

<script setup>
// Scroll handling
import { onUnmounted, ref, nextTick } from 'vue';
const isVisible = ref(false);
const handleScroll = () => {
    // Only run the code if we are on the client
    if (typeof window !== 'undefined') {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        isVisible.value = st > window.innerHeight / 2;
    }
};
if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
    nextTick(() => handleScroll());
}
onUnmounted(() => {
    if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
    }
});
</script>

<style lang="scss">
.button-fixed {
    position: fixed;
    bottom: 30px;
    right: 30px;

    a {
        text-indent: 110%;
        display: block;
        width: 38px;
        height: 38px;
        overflow: hidden;
        text-wrap: nowrap;
    }

    .w-4 {
        position: absolute;
        left: 50%;
        top: 0;
    }
}
</style>
