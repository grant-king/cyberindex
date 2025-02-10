<template>
    <div class="bg-white/50 py-24 sm:py-32">
        <div class="mx-auto">
            <div class="bg-black">
                <BasicHeader eyebrow="Welcome" title="My Community Technology Platform"
                    description="Where thine shalt discoverish." />
            </div>
            <div class="mx-auto mt-32 grid max-w-5xl grid-cols-1 gap-16">
                <div v-for="project in projects_store.project_list" :key="project.url" class="">
                    <ProjectBrief :project="project" />
                </div>
            </div>
        </div>
        <div :v-show="projects_store.next_page" @click="projects_store.fetchProjects">
            <button class="mt-16 flex items-center justify-center font-mono w-full h-20 bg-lime-400/40 rounded-lg">
                LOAD MORE
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProjectsStore } from '@/stores/projects';
import ProjectBrief from './ProjectBrief.vue';
import BasicHeader from './BasicHeader.vue';

const projects_store = useProjectsStore();

onMounted(async () => {
    await projects_store.fetchProjects();
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