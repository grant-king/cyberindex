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
            <SessionConsole />
        </div>
        <div class="min-h-32 bg-white/50">
        </div>
        <div class="bg-white/50">
            <div class="font-mono p-8 text-3xl font-bold">
                Experiments
            </div>
            <div class=" p-8">
                <div class="text-black">
                    <a href="/buildforge"
                        class="text-2xl font-bold border-dotted border-4 border-white/50 px-3 py-2 rounded-sm hover:border-white/80">
                        Our Disco Tech
                    </a>
                </div>
            </div>
            <div class="hidden p-8">
                <RouterLink to="/webgpu">
                    <button
                        class="text-black text-2xl font-bold border-dotted border-4 border-white/50 px-3 py-2 rounded-sm hover:border-white/80">
                        Web GPU Demo
                    </button>
                </RouterLink>
            </div>

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
import SessionImageAdd from '@/components/SessionImageAdd.vue'
import ThreeDemo from '@/components/ThreeDemo.vue'

</script>