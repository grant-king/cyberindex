<template>
    <div class="bg-white/50 p-8" @click="avatarcreate.fetchAllImages">
        <div class="text-2xl my-8">
            Session Image Quilt
        </div>
        <div class="flex flex-wrap">
            <div v-for="(image, idx) in avatarcreate.all_images" :key="idx" class="">
                <div class="h-16 w-16 border-white border-2 border-dotted rounded-md">
                    <img class="aspect-square object-cover blur-sm hover:blur-0 border-white border-2 border-dotted rounded-md" :src="image" />
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useAvatarStatsStore } from '@/stores/avatarstats'
import { useAvatarCreateStore } from '@/stores/avatarcreate';
import { ref } from 'vue'

const stats_store = useAvatarStatsStore()
const avatarcreate = useAvatarCreateStore()
avatarcreate.fetchAllImages()

</script>