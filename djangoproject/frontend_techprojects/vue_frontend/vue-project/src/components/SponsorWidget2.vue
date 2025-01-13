<template>
    <figure class="mt-10">
        <blockquote class="text-xl bg-clip-text bg-[url(https://unrolla.blob.core.windows.net/unrolla/images/P8220521.webp)]">
            <div class="text-transparent bg-clip-text bg-black/80 font-bold">
                <p>“{{ message }}”</p>
            </div>
        </blockquote>
        <figcaption class="mt-10 flex gap-x-6">
            <img :src="sponsor_avatar" alt="" class="size-36 flex-none rounded-full border-8 border-transparent bg-clip-border bg-cover bg-[url(https://unrolla.blob.core.windows.net/unrolla/images/P9110024.webp)]" />
            <div class="text-center">
                <div class="bg-clip-text bg-black">
                    <div class="text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-b from-lime-900 via-lime-900/80 to-violet-600/80">{{ author }}</div>
                </div>
                <div class="text-sm/6 font-semibold font-mono text-black">{{ sponsor_role }} for {{ org_name }}</div>
                <div class="flex justify-center pt-2">
                    <img :src="logo_source" alt="" class="size-20" />
                </div>
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
    logo_source: String
});
</script>