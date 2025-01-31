<template>
    <div class="flex flex-wrap" @click="stats_store.fetchAllImages">
        <div v-for="(image, idx) in stats_store.all_images" :key="idx" class="">
            <div class="h-24 w-24">
                <img class="aspect-square object-cover border-white border-2 border-dotted rounded-md" :src="image" />
            </div>
            
        </div>
    </div>

</template>

<script setup>
import { useAvatarStatsStore } from '@/stores/avatarstats'
import { ref } from 'vue'

const stats_store = useAvatarStatsStore()
stats_store.fetchAllImages()

</script>