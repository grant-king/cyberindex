<template>
    <div class="bg-white/10 rounded-lg py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:max-w-none">
                <div class="font-mono">
                    <h2 class="text-balance text-2xl font-semibold tracking-tight text-black">{{ title }}</h2>
                    <p class="mt-4 text-lg/8 text-black/80">{{ subheading }}</p>
                </div>
                <dl
                    class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                    <div v-for="stat in stats" :key="stat.id" class="flex flex-col bg-white/5 p-8">
                        <dt class="text-sm/6 font-semibold text-gray-600">{{ stat.name }}</dt>
                        <dd class="order-first text-3xl font-semibold tracking-tight text-black">{{ stat.value }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>

const title = 'Sponsorship Stats'
const subheading = '::::::::::: :::::'

const stats = [
    { id: 1, name: 'messages on the platform', value: '12,456' },
    { id: 2, name: 'message delivery fee', value: '10 credits' },
    { id: 3, name: 'your messages', value: '48' },
    { id: 4, name: 'your all-time reads', value: '2280' },
]
</script>