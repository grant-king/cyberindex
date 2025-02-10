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
        <div class="bg-white/50 p-4">
            <div class="text-black">
                <a href="/buildforge"
                class="text-2xl font-bold border-dotted border-4 border-white/50 px-3 py-2 rounded-sm hover:border-white/80">
                    Our Disco Tech 
                </a>
                    ** now featuring multiplayer bugs! **
            </div>
            <div class="py-8 text-xs">
                I mean multiplayer is very broken, but check it out if you must see the developing state of the project NOW.
                If anyone knows how to run web workers in a Vue => static bucket Django storages setup without offending CORS, I'd love to learn from you.
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