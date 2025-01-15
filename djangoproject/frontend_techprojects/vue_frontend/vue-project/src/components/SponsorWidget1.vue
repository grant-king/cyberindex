<template>
    <img class="h-40 w-auto" :src="company_logo_url" alt="" />
    <figure class="mt-10">
        <blockquote class="text-lg/8 font-semibold text-black">
            <p>“{{ message }}”</p>
        </blockquote>
        <figcaption class="mt-10 flex gap-x-6">
            <img :src="sponsor_avatar" alt="" class="size-12 flex-none rounded-full bg-gray-50" />
            <div>
                <div class="text-base font-semibold text-black">{{ author }}</div>
                <div class="text-sm/6 text-black">{{ sponsor_role }} for {{ org_name }}</div>
            </div>
        </figcaption>
    </figure>
</template>

<script setup>
const props = defineProps({
    message: String,
    author: String,
    sponsor_role: String,
    org_name: String,
    sponsor_avatar: String,
    company_logo_url: String
});
</script>