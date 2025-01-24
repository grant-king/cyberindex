<template>
    <div class="bg-white/50 py-24 sm:py-32">
      <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-base/7 font-semibold text-black/80">{{ eyebrow }}</h2>
        <p class="mt-2 max-w-lg text-4xl font-bold tracking-tight text-pretty text-black/80 sm:text-5xl bg-clip-text bg-cover"
        :style="{backgroundImage: `url(${title_bg})`}">{{ heading_title }}</p>
        <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div class="relative lg:col-span-3">
            <div class="absolute inset-px rounded-lg bg-indigo-200/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img class="h-80 object-cover object-left" :src=box1.image_src alt="" />
              <div class="p-10 pt-4">
                <h3 class="text-sm/4 font-semibold text-black/80">{{ box1.eyebrow }}</h3>
                <p class="mt-2 text-lg font-medium tracking-tight text-black">{{ box1.title }}</p>
                <p class="mt-2 max-w-lg text-sm/6 text-black">{{ box1.content }}</p>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div class="relative lg:col-span-3">
            <div class="absolute inset-px rounded-lg bg-indigo-200/5 lg:rounded-tr-[2rem]" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img class="h-80 object-cover object-left lg:object-right" :src=box2.image_src alt="" />
              <div class="p-10 pt-4">
                <h3 class="text-sm/4 font-semibold text-indigo-600">{{ box2.eyebrow }}</h3>
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">{{ box2.title }}</p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600">{{ box2.content }}</p>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div class="relative lg:col-span-2">
            <div class="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img class="h-80 object-cover object-left" :src=box3.image_src alt="" />
              <div class="p-10 pt-4">
                <h3 class="text-sm/4 font-semibold text-indigo-600">{{ box3.eyebrow }}</h3>
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">{{ box3.title }}</p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600">{{ box3.content }}</p>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div class="relative lg:col-span-2">
            <div class="absolute inset-px rounded-lg bg-white" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img class="h-80 object-cover" :src=box4.image_src alt="" />
              <div class="p-10 pt-4">
                <h3 class="text-sm/4 font-semibold text-indigo-600">{{ box4.eyebrow }}</h3>
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">{{ box4.title }}</p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600">{{ box4.content }}</p>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5" />
          </div>
          <div class="relative lg:col-span-2">
            <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img class="h-80 object-cover" :src=box5.image_src alt="" />
              <div class="p-10 pt-4">
                <h3 class="text-sm/4 font-semibold text-indigo-600">{{ box5.eyebrow }}</h3>
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">{{ box5.title}}</p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600">{{ box5.content }}</p>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue'

const eyebrow = ref('re-up')
const heading_title = ref('Add some credits, yo')
const title_bg = ref('https://unrolla.blob.core.windows.net/unrolla/images/P8220488.webp')

const box1 = ref({
    eyebrow: 'select amount',
    title: 'Add credits to your cart',
    content: 'buttons to select amount',
    image_src: 'https://unrolla.blob.core.windows.net/unrolla/images/1000000108.webp'
})

const box2 = ref({
    eyebrow: 'stripe checkout',
    title: 'Add prepay credits to your account.',
    content: 'stripe integration zone',
    image_src: 'https://unrolla.blob.core.windows.net/unrolla/images/1000000108.webp'
})

const box3 = ref({
    eyebrow: 'publication credits',
    title: 'How IT works',
    content: 'Each time a user chooses to read one of your messages, $0.10 will be deducted from your account balance.',
    image_src: 'https://unrolla.blob.core.windows.net/unrolla/images/1000000108.webp'
})

const box4 = ref({
    eyebrow: 'quality reads',
    title: 'How IT works',
    content: 'Users must intentionally request to read a message, one at a time. This ensures they are interested in learning and engaging.',
    image_src: 'https://unrolla.blob.core.windows.net/unrolla/images/1000000108.webp'
})

const box5 = ref({
    eyebrow: 'quality reads',
    title: 'How IT works',
    content: 'It takes several clicks to get to the interactive community area where messages will be delivered to the interested users. Our infrastructure ensures messages are only delivered to requests with a very high probibility of maximum consumption quality.',
    image_src: 'https://unrolla.blob.core.windows.net/unrolla/images/1000000108.webp'
})

</script>