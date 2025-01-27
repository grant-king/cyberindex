<template>
    <div class="bg-white/50">
        <div class="border-black border-dashed border-y-8">
            <SponsorWidget3 :message="sponsormessages_store.new_message_preview.message" :author="sponsorprofiles_store.new_object_preview.rep_name" :sponsor_role="sponsorprofiles_store.new_object_preview.rep_role"
                :org_name="sponsorprofiles_store.new_object_preview.company_name" :sponsor_avatar="sponsorprofiles_store.new_object_preview.rep_image_url"
                :company_logo_url="sponsorprofiles_store.new_object_preview.company_logo_url" />
        </div>
    </div>
</template>

<script setup>
import { useSponsorprofilesStore } from '@/stores/sponsorprofiles';
import { useSponsormessagesStore } from '@/stores/sponsormessages';
import SponsorWidget3 from './SponsorWidget3.vue';

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