<template>
    <BasicHeader eyebrow="Contribute" title="Submit Your Project" description="paste a github link, fetch the details, save to our project index." />
    <div class="bg-white/50">
        <div class="space-y-12 px-8 py-16">
            <div class="border-b border-black/10 pb-12">
                <!-- Title Section -->
                <div class="">
                    <h2 class="text-lg font-semibold text-black">Register a new open source civic project</h2>
                    <p class="mt-1 text-sm text-black">Use this form to add any open source project on GitHub to our
                        index.</p>
                </div>
                <!-- Form Section -->
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6">
                    <!-- Input Area -->
                    <div class="sm:col-span-4">
                        <label for="github_url" class="block font-medium text-black">GitHub Repository URL</label>
                        <div class="mt-2">
                            <input id="github_url" name="github_url" type="url"
                            v-model="github_url"
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" />
                        </div>
                        <div class="mt-4">
                            <button type="button" @click="fetchDetails"
                            class="rounded-md px-3 py-2 font-semibold bg-white/80 hover:bg-white/70">
                                Fetch Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Preview Area, shown when data fetched -->
        <div v-show="projects_store.show_preview">
            <!-- Submit Button top -->
            <div class="mt-6 flex items-center justify-center gap-x-16">
                <button type="button"
                @click="projects_store.submitNewProject"
                class="rounded-md bg-green-600 px-4 py-3 text-4xl font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Save</button>
            </div>
            
            <div class="min-h-32">
            </div>
            
            <!-- Auto Populated Area -->
            <ProjectBrief :project="projects_store.new_object_preview"/>
            
            <div class="min-h-32">
            </div>
            
            <!-- Submit button secondary -->
            <div class="mt-6 flex items-center justify-center gap-x-16">
                <button type="button"
                @click="projects_store.submitNewProject"
                class="rounded-md bg-green-600 px-4 py-3 text-4xl font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Save</button>
            </div>

            <div class="min-h-64">
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProjectsStore } from '@/stores/projects';
import ProjectBrief from './ProjectBrief.vue';
import BasicHeader from './BasicHeader.vue';

const github_url = ref('');
const projects_store = useProjectsStore();

async function fetchDetails() {
    console.log('fetching details');
    if (!github_url.value) {
        console.log('no url');
        return;
    }
    const repo_data = await projects_store.populateNewObjectPreview(github_url.value);
    console.log(repo_data);
    // reset the input
    github_url.value = '';
}

</script>