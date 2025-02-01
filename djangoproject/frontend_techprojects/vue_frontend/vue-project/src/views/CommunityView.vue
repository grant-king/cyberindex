<template>
    <div class="">
        <div>
            <BasicHeader eyebrow="you are so very welcome" title="Community Center"
                description="Or 'Chill Zone'? 'Meditation Lagoon'? Feel free to give it a private nickname. Whatever you want to call this place, please have a good time." />
        </div>
        <div>
            <PixelDanceArt />
        </div>
        <div class="min-h-16 bg-white/50">
        </div>
        <div class="">
            <SponsorCarousel />
        </div>
        <div class="min-h-32 bg-white/50">
        </div>
        <div class="">
            <SessionImageQuilt />
        </div>
        <div class="min-h-32 bg-white/50">
        </div>
        <div class="">
            <SessionConsole />
        </div>
        <div class="min-h-32 bg-white/50">
        </div>
        <div class="">
            <ThreeDemo />
        </div>
        <div class="min-h-32 bg-white/50">
        </div>
    </div>
</template>

<script setup>
import PixelDanceArt from '@/components/PixelDanceArt.vue'
import BasicHeader from '@/components/BasicHeader.vue'
import SponsorCarousel from '@/components/SponsorCarousel.vue'
import SessionConsole from '@/components/SessionConsole.vue'
import SessionImageQuilt from '@/components/SessionImageQuilt.vue'
import ThreeDemo from '@/components/ThreeDemo.vue'

</script>