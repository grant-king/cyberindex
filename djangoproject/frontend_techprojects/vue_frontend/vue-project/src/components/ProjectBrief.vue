<template>
    <article
        class="relative isolate flex flex-col justify-end overflow-hidden rounded-t-lg bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <img :src="project.image_url" alt="" class="absolute inset-0 -z-10 size-full object-cover" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-white via-white/80" />
        <h3 class="mt-3 text-lg/6 font-semibold text-balack">
            <a :href="project.repository_url">
                <span class="absolute inset-0" />
                {{ project.name }}
            </a>
        </h3>
        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-black">
            <div class="mr-2 text-sm text-black/80">origin synchronized</div>
            <time :datetime="project.last_updated" class="border p-1 bg-green-50 font-mono">{{ new Date(project.last_updated).toLocaleString()
                }}</time>
        </div>
    </article>

    <div class="relative bg-white rounded-b-sm">
        <!-- image separator -->
        <img class="opacity-20 h-2 w-full bg-gray-50 object-cover" :src="project.repo_details.owner.avatar_url"
            alt="" />
        <!-- github profile -->
        <div class="pt-8 px-8 bg-white">
            <div class="flex items-center gap-x-6">
                <img class="size-16 rounded-full" :src="project.repo_details.owner.avatar_url" alt="" />
                <div>
                    <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">{{
                        project.repo_details.owner.login }}
                    </h3>
                    <p class="text-sm/6 font-semibold text-green-600">owner</p>
                </div>
            </div>
        </div>
        <!-- repo title  -->
        <div class="px-8 pt-8">
            <h2 class="text-lg font-semibold text-black">{{ project.repo_details.name
                }}
            </h2>
        </div>

        <div class="px-8 pt-8">
            <p class="text-lg/8 text-black/80">{{ project.repo_details.description }}</p>
        </div>

        <!-- numeric stats  -->
        <div class="px-8 pt-8">
            <dl class="grid max-w-xl grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
                <div v-for="stat in getStats(project)" :key="stat.id"
                    class="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                    <dt class="text-sm/6 text-gray-600">{{ stat.name }}</dt>
                    <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900">
                        {{ stat.value }}</dd>
                </div>
            </dl>
        </div>

        <!-- wordy stats -->
        <div class="px-8 py-8">
            <div class="">
                <dl class="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
                    <div v-for="stat in getWordyStats(project)" :key="stat.id" class="flex flex-col gap-y-3">
                        <dt class="text-base/7 text-gray-600">{{ stat.name }}</dt>
                        <dd class="order-first text-xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
                    </div>
                </dl>
            </div>
        </div>
        <!-- topic tags -->
        <div class="px-8 py-8">
            <div class="flex flex-wrap gap-2">
                <div v-for="topic in project.repo_details.topics" :key="topic"
                    class="px-3 py-1 bg-gray-900/10 rounded-full text-sm/6 text-gray-900">
                    {{ topic }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    project: Object,
});

function getStats(project) {
    return [
        { id: 2, name: 'Stars', value: project.repo_details.stargazers_count },
        { id: 1, name: 'Watching', value: project.repo_details.subscribers_count },
        { id: 3, name: 'Forks', value: project.repo_details.forks_count },
        { id: 4, name: 'Issues', value: project.repo_details.open_issues_count },
        { id: 5, name: 'Size', value: project.repo_details.size },
    ];
}

function getWordyStats(project) {
    return [
        { id: 4, name: 'Language', value: project.repo_details.language },
        { id: 5, name: 'License', value: project.repo_details.license.name },
];
}

</script>

<style scoped>
.custom-border-radius {
    border-top-left-radius: 32px;
    /* Adjust the value as needed */
    border-top-right-radius: 32px;
    /* Adjust the value as needed */
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
}
</style>