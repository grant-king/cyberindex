<template>
    <div class="bg-white/50 px-6 py-24 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <p class="text-base/7 font-semibold text-lime-200/50">
                {{ eyebrow }}
            </p>
            <h2 class="mt-2 text-5xl font-semibold tracking-tight text-black sm:text-7xl">
                {{ title }}
            </h2>
            <p class="mt-8 text-pretty text-lg font-medium text-white/50 sm:text-xl/8">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    eyebrow: String,
    title: String,
    description: String,
})
</script>