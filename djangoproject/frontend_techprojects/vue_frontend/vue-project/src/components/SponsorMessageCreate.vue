<template>
    <form action="#" method="POST" class="lg:flex-auto">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-2">
                <label for="message" class="block text-sm/6 font-semibold text-black">Write a meditation for the community to reflect on</label>
                <div class="mt-2.5">
                    <textarea id="message" name="message" rows="4"
                    v-model="sponsormessages_store.new_message_preview.message"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                </div>
            </div>
        </div>
        <div class="mt-10">
            <button type="button"
                @click="submit_message()"
                class="block w-full rounded-md bg-lime-200 px-3.5 py-2.5 text-center text-sm font-bold text-white/20 bg-clip-text border-4 border-dotted border-black shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">
                Publish Your Meditation</button>
        </div>
        <p class="mt-4 text-sm/6 text-black">By submitting this form, I agree to the <a href="#"
                class="font-semibold hover:text-lime-950">privacy&nbsp;policy</a>.</p>
    </form>
</template>

<script setup>
import { useSponsormessagesStore } from '@/stores/sponsormessages';
const sponsormessages_store = useSponsormessagesStore();

async function submit_message() {
    sponsormessages_store.createSponsorMessage();
}
</script>