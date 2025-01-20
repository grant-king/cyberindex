<template>
  <div class="flex flex-col align-center gap-1">
    <div class="relative m-auto border-2" :style="{width: `${stage_width}px`, height: `${stage_height}px`}">
      <div class="absolute w-2 h-2 bg-white" :style="{left: `${pixel_position.x}px`, top: `${pixel_position.y}px`}"></div>
    </div>
  </div>
  <div clas="">
    <div>
      <button type="button" @click="start_recording()"
        class="block w-full rounded-md bg-lime-200 px-3.5 py-2.5 text-center text-sm font-bold text-white/20 bg-clip-text border-4 border-dotted border-black shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">Start
        Recording</button>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, ref, onUnmounted } from 'vue'

const is_animating = ref(false)
const time_remaining = ref(20)
const pixel_position = reactive({ x: 0, y: 0 })
const animation_interval = ref(null)
const move_rate = ref(4)
const stage_width = ref(400)
const stage_height = ref(400)

function reset_pixel_position() {
  pixel_position.x = stage_width.value / 2
  pixel_position.y = stage_height.value / 2
}

function start_timer() {
  time_remaining.value = 20
  animation_interval.value = setInterval(() => {
    time_remaining.value -= 1
    if (time_remaining.value <= 0) {
      stop_recording()
    }
  }, 1000)
}

function clear_timer() {
  if (animation_interval.value) {
    clearInterval(animation_interval.value)
    animation_interval.value = null
  }
}

function handle_key_press(event) {
  if (!is_animating.value) {
    return
  }

  switch (event.key) {
    case 'w':
      pixel_position.y = Math.max(pixel_position.y - move_rate.value, 0)
      break
    case 's':
      pixel_position.y = Math.min(pixel_position.y + move_rate.value, stage_height.value)
      break
    case 'a':
      pixel_position.x = Math.max(pixel_position.x - move_rate.value, 0)
      break
    case 'd':
      pixel_position.x = Math.min(pixel_position.x + move_rate.value, stage_width.value)
      break
  }
  console.log('pixel_position', pixel_position)
}

function enable_controls() {
  window.addEventListener('keydown', handle_key_press)
}

function disable_controls() {
  window.removeEventListener('keydown', handle_key_press)
}

function start_recording() {
  if (is_animating.value) {
    return
  }
  console.log('start animation recording')
  is_animating.value = true
  
  reset_pixel_position()
  start_timer()
  enable_controls()
}

function stop_recording() {
  is_animating.value = false
  clear_timer()
  disable_controls()
}

onUnmounted(() => {
  stop_recording()
})

</script>