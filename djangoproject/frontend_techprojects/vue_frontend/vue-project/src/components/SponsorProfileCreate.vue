<template>
    <form action="#" class="lg:flex-auto">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-2">
                <label for="rep-name" class="block text-sm/6 font-semibold text-black">Your name</label>
                <div class="mt-2.5">
                    <input type="text" name="rep-name" id="rep-name" autocomplete="full-name"
                    v-model="sponsorprofiles_store.new_object_preview.rep_name"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                </div>
            </div>
            <div class="sm:col-span-2">
                <label for="rep_image_url" class="block text-sm/6 font-semibold text-black">Profile Picture URL</label>
                <div class="mt-2.5">
                    <input type="url" name="rep_image_url" id="rep_image_url"
                    v-model="sponsorprofiles_store.new_object_preview.rep_image_url"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                </div>
            </div>
            <div>
                <label for="org_name" class="block text-sm/6 font-semibold text-black">Organization
                    name</label>
                <div class="mt-2.5">
                    <input id="org_name" name="org_name" type="text"
                    v-model="sponsorprofiles_store.new_object_preview.company_name"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                </div>
            </div>
            <div>
                <label for="org_role" class="block text-sm/6 font-semibold text-black">Your role</label>
                <div class="mt-2.5">
                    <input type="url" name="org_role" id="org_role"
                    v-model="sponsorprofiles_store.new_object_preview.rep_role"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                </div>
            </div>
            <div class="sm:col-span-2">
                <label for="website" class="block text-sm/6 font-semibold text-black">Website</label>
                <div class="mt-2.5">
                    <input type="url" name="website" id="website"
                    v-model="sponsorprofiles_store.new_object_preview.company_website"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                </div>
            </div>
            <div class="sm:col-span-2">
                <label for="logo_url" class="block text-sm/6 font-semibold text-black">Organization logo URL</label>
                <div class="mt-2.5">
                    <input type="url" name="logo_url" id="logo_url"
                    v-model="sponsorprofiles_store.new_object_preview.company_logo_url"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                </div>
            </div>
        </div>
        <div class="mt-10">
            <button type="button"
            @click="submit_profile()"
                class="block w-full rounded-md bg-lime-200 px-3.5 py-2.5 text-center text-sm font-bold text-white/20 bg-clip-text border-4 border-dotted border-black shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">
                Update Sponsorship Profile</button>
        </div>
        <p class="mt-4 text-sm/6 text-black">By submitting this form, I {{ sponsorprofiles_store.new_object_preview.rep_name }} agree to the <a href="#"
                class="font-semibold hover:text-lime-950">privacy&nbsp;policy</a>.</p>
    </form>
</template>

<script setup>
import { useSponsorprofilesStore } from '@/stores/sponsorprofiles';
const sponsorprofiles_store = useSponsorprofilesStore();

async function submit_profile() {
    sponsorprofiles_store.updateSponsorProfile();
}

</script>