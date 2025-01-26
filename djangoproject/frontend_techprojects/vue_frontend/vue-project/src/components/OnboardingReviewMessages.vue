<template>
    <div class="bg-white/50 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">{{ title }}</h2>
          <p class="mt-2 text-lg/8 text-gray-600">{{ subheading }}</p>
        </div>
        <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="message in messages" :key="message.id" class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="message.datetime" class="text-gray-500">{{ message.date }}</time>
              <a :href="message.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ message.category.title }}</a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <a :href="message.href">
                  <span class="absolute inset-0" />
                  {{ message.title }}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{{ message.description }}</p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img :src="message.author.imageUrl" alt="" class="size-10 rounded-full bg-gray-50" />
              <div class="text-sm/6">
                <p class="font-semibold text-gray-900">
                  <a :href="message.author.href">
                    <span class="absolute inset-0" />
                    {{ message.author.name }}
                  </a>
                </p>
                <p class="text-gray-600">{{ message.author.role }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  const title = 'Your Meditations'
  const subheading = 'analyze, archive, and meditate on your messages to the community'


  const messages = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://unrolla.blob.core.windows.net/unrolla/images/P6080353.webp',
      },
    },
    // More messages...
  ]
  </script>