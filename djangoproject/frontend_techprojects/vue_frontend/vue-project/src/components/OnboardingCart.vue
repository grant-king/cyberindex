<template>
    <div class="py-8">
        <div class="mx-auto max-w-7xl text-center">
            <ul role="list" class="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2">
                <li v-for="(item, idx) in packages" :key="idx" 
                :class="[item.selected ? 'rounded-2xl bg-indigo-200/20 ring-2 ring-white/80 ring-offset-4' : 'rounded-2xl bg-indigo-200/5 ']"
                @click="select_item(idx)">
                <div 
                    class="py-10">
                    <img class="mx-auto size-48 rounded-full" :src="item.imageUrl" alt="" />
                    <h3 class="mt-6 text-xl font-semibold tracking-tight text-white">{{ item.amount }}</h3>
                    <p class="text-sm/6 text-black/80">{{ item.subtext }}</p>
                </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCheckoutStore } from '@/stores/checkout'
const store = useCheckoutStore()

const selected_item = ref(null)

function select_item(item_idx) {
    for (let item = 0; item < packages.value.length; item++) {
        packages.value[item].selected = false
        if (item == item_idx){
            packages.value[item].selected = true
            selected_item.value = packages.value[item]
        }
    }
    submit_amount()
}

async function submit_amount() {
    if (selected_item.value == null) {
        alert('Please select a package')
        return
    }
    await store.submitCheckout(selected_item.value.amount_pennies)
}

const packages = ref([
    {
        selected: false,
        amount: '$40',
        amount_pennies: 4000,
        subtext: 'small package',
        imageUrl:
            'https://unrolla.blob.core.windows.net/unrolla/images/P8220536.webp',
    },
    {
        selected: false,
        amount: '$200',
        amount_pennies: 20000,
        subtext: 'big package',
        imageUrl:
            'https://unrolla.blob.core.windows.net/unrolla/images/P6080370.webp',
    },

])
</script>