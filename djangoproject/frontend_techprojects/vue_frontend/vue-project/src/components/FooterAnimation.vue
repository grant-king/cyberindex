<template>
    <div class="min-h-96 font-mono bg-clip-text text-transparent bg-gradient-to-b from-lime-400 via-black/50 to-black">{{ footer_filler_text }}</div>
</template>
<script setup>
import {computed, ref} from 'vue'

const footer_filler_characters = [
  '|', '\\', '|', '/',
]

const current_footer_filler_idx = ref(0)

const footer_filler_text = computed(() => {
  let text = ''
  for (let i = 0; i < 1000; i++) {
    text += footer_filler_characters[current_footer_filler_idx.value] + '  '
  }
  return text
})

setInterval(() => {
  current_footer_filler_idx.value = (current_footer_filler_idx.value + 1) % footer_filler_characters.length
}, 8000)

</script>