<template>
    <div>
        <OnboardingForm />
    </div>
    <div>
        <OnboardingReview />
    </div>
    <div>
        <OnboardingCheckout />
    </div>
</template>

<script setup>
import OnboardingForm from '@/components/OnboardingForm.vue';
import OnboardingReview from '@/components/OnboardingReview.vue';
import OnboardingCheckout from '@/components/OnboardingCheckout.vue';

import { useSponsorprofilesStore } from '@/stores/sponsorprofiles';

const sponsorprofiles_store = useSponsorprofilesStore();
sponsorprofiles_store.fetchMyProfile();
</script>