<template>
    <div class="bg-white/50 py-24 sm:py-32">
        <div class="mx-auto lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl">Civic Tech Index
                    Results</h2>
                <p class="mt-2 text-lg/8 text-black">Search and filter registered projects.</p>
            </div>
            <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none">
                <div v-for="project in projects_store.project_list" :key="project.url">
                    <ProjectBrief :project="project" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProjectsStore } from '@/stores/projects';
import ProjectBrief from './ProjectBrief.vue';

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