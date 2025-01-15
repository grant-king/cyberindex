<template>
    <div class="bg-white/50">
        <div class="border-black border-dashed border-y-8">
            <SponsorWidget3 :message="preview.message" :author="preview.rep_name" :sponsor_role="preview.rep_role"
                :org_name="preview.company_name" :sponsor_avatar="preview.rep_image_url"
                :company_logo_url="preview.company_logo_url" />
        </div>
        <div class="mt-16 pb-32 mx-auto max-w-xl lg:max-w-4xl">
            <div class="flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                <div class="lg:flex-auto">
                    <SponsorWidget1 :message="preview.message" :author="preview.rep_name"
                        :sponsor_role="preview.rep_role" :org_name="preview.company_name"
                        :sponsor_avatar="preview.rep_image_url" :company_logo_url="preview.company_logo_url" />
                </div>
                <div class="lg:flex-auto">
                    <SponsorWidget2 :message="preview.message" :author="preview.rep_name"
                        :sponsor_role="preview.rep_role" :org_name="preview.company_name"
                        :sponsor_avatar="preview.rep_image_url" :company_logo_url="preview.company_logo_url" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSponsorprofilesStore } from '@/stores/sponsorprofiles';
import SponsorWidget1 from './SponsorWidget1.vue';
import SponsorWidget2 from './SponsorWidget2.vue';
import SponsorWidget3 from './SponsorWidget3.vue';

const sponsorprofiles_store = useSponsorprofilesStore();
const preview = sponsorprofiles_store.new_object_preview;
</script>