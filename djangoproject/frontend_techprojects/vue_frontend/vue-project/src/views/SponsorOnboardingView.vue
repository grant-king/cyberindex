<template>
    <div>
        <BasicHeader eyebrow="THE place to manage all of your sponsorship account" title="Sponsor Dashboard" description="update your profile, add messages, look at all the custom stuff for you here." />
    </div>
    <div>
        <OnboardingForm />
    </div>
    <div>
        <OnboardingReview />
    </div>
    <div>
        <OnboardingReviewMessages />
    </div>
    <div>
        <OnboardingCheckout />
    </div>
</template>

<script setup>
import BasicHeader from '@/components/BasicHeader.vue';
import OnboardingForm from '@/components/OnboardingForm.vue';
import OnboardingReview from '@/components/OnboardingReview.vue';
import OnboardingReviewMessages from '@/components/OnboardingReviewMessages.vue';
import OnboardingCheckout from '@/components/OnboardingCheckout.vue';

import { useSponsorprofilesStore } from '@/stores/sponsorprofiles';

const sponsorprofiles_store = useSponsorprofilesStore();
sponsorprofiles_store.fetchMyProfile();
</script>