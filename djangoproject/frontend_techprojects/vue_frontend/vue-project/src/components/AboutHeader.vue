<template>
    <div class="py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <p class="text-base/7 font-bold text-black/5 bg-clip-text bg-gradient-to-r from-lime-200 to-lime-900">{{ props.heading_content.eyebrow }}</p>
                <h2 class="mt-2 text-5xl font-semibold tracking-tight text-black sm:text-7xl">{{ props.heading_content.title }}</h2>
                <p class="mt-8 text-pretty text-lg font-medium text-black/90 sm:text-xl/8">{{ props.heading_content.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
    heading_content: Object,
});
</script>