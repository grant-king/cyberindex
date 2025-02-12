<template>
    <div class="bg-white/10 rounded-lg py-8">
        <div class="mx-auto max-w-7xl px-8">
            <div class="mx-auto max-w-2xl lg:max-w-none" @click="stats_store.fetchSessionStats">
                <div class="font-mono">
                    <h2 class="text-balance text-2xl font-semibold tracking-tight text-black">{{ title }}</h2>
                    <p class="mt-4 text-lg/8 text-black/80">{{ subheading }}</p>
                </div>
                <dl
                    class="mt-4 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                    <div v-for="(stat, value) in stats_store.session_stats" :key="stat" class="flex flex-col bg-white/5 p-8">
                        <dt class="text-sm/6 font-semibold text-black/80">{{ value }}</dt>
                        <dd class="order-first text-3xl font-semibold tracking-tight text-black">{{ stat }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useAvatarStatsStore } from '@/stores/avatarstats';
import { ref } from 'vue'

const stats_store = useAvatarStatsStore()
stats_store.fetchSessionStats()

const subheading = '::::::::::: :::::'

// get stat group index from props
const props = defineProps({
    stgrp_idx: Number,
    title: String
})
</script>