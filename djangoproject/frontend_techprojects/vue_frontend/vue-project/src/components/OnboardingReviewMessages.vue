<template>
  <div class="bg-white/50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">{{ title }}</h2>
        <p class="mt-2 text-lg/8 text-black/80">{{ subheading }}</p>
        <button @click="toggleExpanded" class="mt-8 px-3.5 py-2.5 text-lg font-bold font-mono text-lime-400/40 hover:text-lime-400/80 border-dotted border-t-4 border-l-2 rounded-sm border-lime-400/80">
          {{ expanded ? 'Collapse' : 'Expand' }}
        </button>
      </div>
      <div v-if="expanded"
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-black pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="message in messages_store.message_list" :key="message.url"
          class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="message.created_at" class="text-black/80">{{ new Date(message.created_at).toLocaleString() }}</time>
            <div v-if="message.archived" class="relative z-10 rounded-full bg-indigo-800/40 px-3 py-1.5 font-medium text-black/80">
              ARCHIVED
            </div>
            <div v-else class="relative z-10 rounded-full bg-lime-100/80 px-3 py-1.5 font-medium text-black/80">
              ACTIVE
            </div>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg/6 font-semibold text-black">
              <a :href="message.url">
                <span class="absolute inset-0" />
                {{ message.total_reads }} total reflections
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm/6 text-black">{{ message.message }}</p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4"
            @click="messages_store.toggleMessageArchiveStatus(message)">
            <img v-if="message.archived" :src="temp_img" alt="" class="size-10 rounded-full bg-gray-50" />
            <img v-else :src="temp_img2" alt="" class="size-10 rounded-full bg-gray-50" />
            <div v-if="message.archived" class="text-sm/6">
              <p class="text-red-950">
              <div>
                <span class="absolute inset-0" />
                PUBLISH
              </div>
              </p>
              <p class="text-black/80">unarchive this message</p>
            </div>
            <div v-else class="text-sm/6">
              <p class="text-lime-950">
              <div>
                <span class="absolute inset-0" />
                UNPUBLISH
              </div>
              </p>
              <p class="text-black/80">archive this message</p>
            </div>
          </div>
        </article>
        <button @click="messages_store.fetchSponsormessages" v-show="messages_store.next_page">
          <div class="flex items-center justify-center font-mono w-full h-20 bg-lime-400/40 rounded-lg">
            LOAD MORE
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSponsormessagesStore } from '@/stores/sponsormessages';

const expanded = ref(false);

function toggleExpanded() {
  expanded.value = !expanded.value;
}

const messages_store = useSponsormessagesStore();

const title = 'Your Meditations'
const subheading = 'analyze, archive, and meditate on your messages to the community'
const temp_img = 'https://unrolla.blob.core.windows.net/unrolla/images/P6080353.webp'
const temp_img2 = 'https://unrolla.blob.core.windows.net/unrolla/images/P6200036_iKu7weu.webp'

</script>