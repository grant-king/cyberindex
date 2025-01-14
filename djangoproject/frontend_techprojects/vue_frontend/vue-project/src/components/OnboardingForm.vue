<template>
    <div class="relative isolate bg-white/50 px-6 py-24 sm:py-32 lg:px-8">
        <svg class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true">
            <defs>
                <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-64"
                    patternUnits="userSpaceOnUse">
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
            </defs>
            <svg x="50%" y="-64" class="overflow-visible fill-gray-50">
                <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                    stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
        <div class="mx-auto max-w-xl lg:max-w-4xl">
            <h2 class="text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl">{{ title_1 }}</h2>
            <p class="mt-2 text-lg/8 text-black">{{ subtitle_1 }}</p>
            <div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                <SponsorProfileCreate />
                <SponsorMessageCreate />
                <!-- Sponsorship Example -->
                <div class="lg:mt-6 lg:w-80 lg:flex-none">
                    <SponsorWidget1 :message="testimonial" :author="testimonial_author" 
                        :sponsor_role="testimonial_author_title" :org_name="testimonial_author_org"
                        :sponsor_avatar="testimonial_author_image" :logo_source="logo_source" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SponsorWidget1 from './SponsorWidget1.vue';
import SponsorMessageCreate from './SponsorMessageCreate.vue';
import SponsorProfileCreate from './SponsorProfileCreate.vue';

const title_1 = 'Let’s get your sponsorship details in order.'
const subtitle_1 = 'This information will be used to create your sponsorship profile.'

//sponsorship example data
const logo_source = 'https://unrolla.blob.core.windows.net/unrolla/images/IT20_pumpkin_logo_D9SHwmg.webp'
const testimonial = 'As someone who is averse to traditional marketing methods and muddy monetization models, I find quiet, transparent support of aligned projects to be the most rewarding.'
const testimonial_author = 'Grant King'
const testimonial_author_image = 'https://unrolla.blob.core.windows.net/unrolla/images/PXL_20231023_004949758_4679usk.webp'
const testimonial_author_title = 'Product Manager'
const testimonial_author_org = 'IT20'

</script>