<template>
    <div class="">
        <div class="bg-black/50 overflow-auto max-w-4xl mx-auto p-4">
            <div class="grid grid-cols-8 gap-4">
                <div v-for="slot in grid_slots" :key="slot" class="column">
                    <div class="aspect-square w-auto bg-gray-200 border border-gray-300">
                        {{ slot }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCollectorStore } from '@/stores/collector';

const collector_store = useCollectorStore()
collector_store.fetchClaims()

const grid_slots = ref(Array.from({ length: 64 }, (_, idx) => idx))
</script>