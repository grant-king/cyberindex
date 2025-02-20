<template>
    <div class="font-mono font-bold text-white">
        <div class="bg-white/10 rounded-sm">
            <div class="grid grid-cols-3 gap-1 text-center place-content-around w-64 h-64">
                <button class="size-16 bg-white/10 hover:bg-white/20 rounded-sm " @click="dec_x_inc_y">

                    X-&Y+

                </button>
                <button class="size-16 bg-white/10 hover:bg-white/20 rounded-sm place-content-center" @click="increment_y">

                    Y+

                </button>
                <button class="size-16 bg-white/10 hover:bg-white/20 rounded-sm place-content-center" @click="increment_x_y">

                    X+&Y+

                </button>
                <button class="size-16 bg-white/10 hover:bg-white/20 rounded-sm place-content-center" @click="decrement_x">

                    X-

                </button>
                <div class="size-16 place-content-center">
                    <button class="h-8 w-16 rounded-t-sm bg-white/10 hover:bg-white/20" @click="increment_z">

                        Z+

                    </button>
                    <hr>
                    <hr>
                    <button class="h-8 w-16 bg-white/10 rounded-b-sm hover:bg-white/20" @click="decrement_z">

                        Z-

                    </button>
                </div>
                <button class="size-16 bg-white/10 hover:bg-white/20 rounded-sm place-content-center" @click="increment_x">

                    X+

                </button>
                <button class="size-16 bg-white/10 hover:bg-white/20 rounded-sm place-content-center" @click="decrement_x_y">

                    X-&Y-

                </button>
                <button class="size-16 bg-white/10 hover:bg-white/20 rounded-sm place-content-center" @click="decrement_y">

                    Y-

                </button>
                <button class="size-16 bg-white/10 hover:bg-white/20 rounded-sm place-content-center" @click="inc_x_dec_y">

                    X+&Y-

                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useBuilderStore } from '@/stores/builder'

const builder_store = useBuilderStore()

onMounted(async () => {
    await builder_store.fetchMyBuilder()
})

async function increment_x() {
    builder_store.my_builder.x++
    await builder_store.updateBuilder()
}

async function decrement_x() {
    builder_store.my_builder.x--
    await builder_store.updateBuilder()
}

async function increment_y() {
    builder_store.my_builder.y++
    await builder_store.updateBuilder()
}

async function decrement_y() {
    builder_store.my_builder.y--
    await builder_store.updateBuilder()
}

async function increment_z() {
    builder_store.my_builder.z++
    await builder_store.updateBuilder()
}


async function decrement_z() {
    builder_store.my_builder.z--
    await builder_store.updateBuilder()
}

async function increment_x_y() {
    builder_store.my_builder.x++
    builder_store.my_builder.y++
    await builder_store.updateBuilder()
}

async function decrement_x_y() {
    builder_store.my_builder.x--
    builder_store.my_builder.y--
    await builder_store.updateBuilder()
}

async function inc_x_dec_y() {
    builder_store.my_builder.x++
    builder_store.my_builder.y--
    await builder_store.updateBuilder()
}

async function dec_x_inc_y() {
    builder_store.my_builder.x--
    builder_store.my_builder.y++
    await builder_store.updateBuilder()
}


</script>