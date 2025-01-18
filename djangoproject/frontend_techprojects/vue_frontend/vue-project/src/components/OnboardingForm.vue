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
                    <SponsorWidget1 :message="sponsormessages_store.new_message_preview.message" :author="sponsorprofiles_store.new_object_preview.rep_name"
                        :sponsor_role="sponsorprofiles_store.new_object_preview.rep_role" :org_name="sponsorprofiles_store.new_object_preview.company_name"
                        :sponsor_avatar="sponsorprofiles_store.new_object_preview.rep_image_url" :company_logo_url="sponsorprofiles_store.new_object_preview.company_logo_url" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SponsorWidget1 from './SponsorWidget1.vue';
import SponsorMessageCreate from './SponsorMessageCreate.vue';
import SponsorProfileCreate from './SponsorProfileCreate.vue';

import { useSponsorprofilesStore } from '@/stores/sponsorprofiles';
import { useSponsormessagesStore } from '@/stores/sponsormessages';

const sponsorprofiles_store = useSponsorprofilesStore();
const sponsormessages_store = useSponsormessagesStore();

const title_1 = 'Let’s get your sponsorship details in order.'
const subtitle_1 = 'This information will be used to create your sponsorship profile.'

</script>