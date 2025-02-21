<template>
<div class="mx-auto">
    <div class="flex items-center justify-center">
        <div class="max-w-xl bg-white/5 px-8 rounded-md"
        @click="store.readMeditation">
            <SponsorWidget2 
            :message="store.current_preview.message"
            :author="store.current_preview.rep_name"
            :sponsor_role="store.current_preview.rep_role"
            :org_name="store.current_preview.company_name"
            :sponsor_avatar="store.current_preview.rep_image_url"
            :company_logo_url="store.current_preview.company_logo_url"
            />
        </div>
    </div>
</div>
</template>

<script setup>
import { useMeditationsStore } from '@/stores/sponsormeditations';
import SponsorWidget2 from './SponsorWidget2.vue';
import { ref } from 'vue'

const store = useMeditationsStore();
console.log(store.current_preview)

</script>