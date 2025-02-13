<template>
    <div>
        <BasicHeader eyebrow="THE place to manage all of your sponsorship account" title="Sponsor Dashboard"
            description="update your profile, add messages, look at all the custom stuff for you here." />
    </div>
    <div>
        <OnboardingForm />
    </div>
    <div>
        <div v-show="show_review">
            <OnboardingReview />
        </div>
        <div v-show="show_messages">
            <OnboardingReviewMessages />
        </div>
        <div v-show="show_checkout">
            <OnboardingCheckout />
        </div>

    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import BasicHeader from '@/components/BasicHeader.vue';
import OnboardingForm from '@/components/OnboardingForm.vue';
import OnboardingReview from '@/components/OnboardingReview.vue';
import OnboardingReviewMessages from '@/components/OnboardingReviewMessages.vue';
import OnboardingCheckout from '@/components/OnboardingCheckout.vue';

import { useSponsorprofilesStore } from '@/stores/sponsorprofiles';
import { useSponsormessagesStore } from '@/stores/sponsormessages';

const show_review = ref(true);
const show_messages = ref(true);
const show_checkout = ref(true);

const sponsorprofiles_store = useSponsorprofilesStore();
sponsorprofiles_store.fetchMyProfile();

</script>