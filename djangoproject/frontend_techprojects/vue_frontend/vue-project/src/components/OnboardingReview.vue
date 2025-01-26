<template>
    <div class="bg-white/50">
        <div class="border-black border-dashed border-y-8">
            <SponsorWidget3 :message="sponsormessages_store.new_message_preview.message" :author="sponsorprofiles_store.new_object_preview.rep_name" :sponsor_role="sponsorprofiles_store.new_object_preview.rep_role"
                :org_name="sponsorprofiles_store.new_object_preview.company_name" :sponsor_avatar="sponsorprofiles_store.new_object_preview.rep_image_url"
                :company_logo_url="sponsorprofiles_store.new_object_preview.company_logo_url" />
        </div>
        <div class="mt-16 pb-32 mx-auto max-w-xl lg:max-w-4xl">
            <div class="flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                <div class="lg:flex-auto">
                    <SponsorWidget1 :message="sponsormessages_store.get_random_message().message" :author="sponsorprofiles_store.my_profile_data.rep_name"
                        :sponsor_role="sponsorprofiles_store.my_profile_data.rep_role" :org_name="sponsorprofiles_store.my_profile_data.company_name"
                        :sponsor_avatar="sponsorprofiles_store.my_profile_data.rep_image_url" :company_logo_url="sponsorprofiles_store.my_profile_data.company_logo_url" />
                </div>
                <div class="lg:flex-auto">
                    <SponsorWidget2 :message="sponsormessages_store.get_random_message().message" :author="sponsorprofiles_store.my_profile_data.rep_name"
                        :sponsor_role="sponsorprofiles_store.my_profile_data.rep_role" :org_name="sponsorprofiles_store.my_profile_data.company_name"
                        :sponsor_avatar="sponsorprofiles_store.my_profile_data.rep_image_url" :company_logo_url="sponsorprofiles_store.my_profile_data.company_logo_url" />
                </div>
            </div>
        </div>
    </div>
    <div>
        <OnboardingReviewMessages />
    </div>
</template>

<script setup>
import { useSponsorprofilesStore } from '@/stores/sponsorprofiles';
import { useSponsormessagesStore } from '@/stores/sponsormessages';
import SponsorWidget1 from './SponsorWidget1.vue';
import SponsorWidget2 from './SponsorWidget2.vue';
import SponsorWidget3 from './SponsorWidget3.vue';
import OnboardingReviewMessages from './OnboardingReviewMessages.vue';

const sponsorprofiles_store = useSponsorprofilesStore();
const sponsormessages_store = useSponsormessagesStore();
set_preview_message();

async function set_preview_message() {
    await sponsormessages_store.fetchSponsormessages();
    console.log(sponsormessages_store.message_list);
    if (sponsormessages_store.message_list.length > 0) {
        console.log(sponsormessages_store.message_list[0].message);
        sponsormessages_store.new_message_preview.message = sponsormessages_store.message_list[0].message;
    }
}
</script>