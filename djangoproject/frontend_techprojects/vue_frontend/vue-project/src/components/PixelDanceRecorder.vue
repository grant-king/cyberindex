<template>
  <div class="flex flex-col align-center gap-1">
    <div class="relative m-auto border-2" :style="{ width: `${stage_width}px`, height: `${stage_height}px` }"
      @click="move_pixel">
      <div class="absolute w-2 h-2 bg-white" :style="{ left: `${pixel_position.x}px`, top: `${pixel_position.y}px` , backgroundColor: pixel_color }">
      </div>
    </div>
  </div>
  <div clas="">
    <div>
      <div v-if="!is_animating" class="flex items-center justify-center gap-2 w-full">
        <!-- color picker -->
        <input type="color" v-model="pixel_color" class="w-8 h-8 rounded-md bg-white"/>
        <button type="button" @click="start_recording()"
          class="rounded-md bg-lime-200 px-3.5 py-2.5 text-center text-sm font-bold text-white/20 bg-clip-text border-4 border-dotted border-black shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">Start
          Recording</button>
      </div>
      <div v-else class="flex items-center justify-center gap-2 w-full">
        <button type="button" @click="stop_recording()"
          class="rounded-md bg-lime-200 px-3.5 py-2.5 text-center text-sm font-bold text-white/20 bg-clip-text border-4 border-dotted border-black shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">Stop
          Recording ({{ time_remaining }})</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, ref, onUnmounted } from 'vue'

import { usePixeldanceStore } from '@/stores/pixeldance'
const pixeldance_store = usePixeldanceStore()

const pixel_color = ref('#11ff00')
const is_animating = ref(false)
const recording_duration = ref(30)
const time_remaining = ref(recording_duration.value)
const pixel_position = reactive({ x: 0, y: 0 })
const animation_interval = ref(null)
const stage_width = ref(400)
const stage_height = ref(400)
const pixel_log = ref([])
const latest_start_time = ref(Date.now())

function reset_pixel_position() {
  pixel_position.x = stage_width.value / 2
  pixel_position.y = stage_height.value / 2
}

function start_timer() {
  time_remaining.value = recording_duration.value
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

function move_pixel(event) {
  if (!is_animating.value) {
    return
  }

  const target_x = event.offsetX
  const target_y = event.offsetY

  const delta_x = target_x - pixel_position.x
  const delta_y = target_y - pixel_position.y
  const travel_duration = 2

  const event_time = Date.now()
  const start_x = pixel_position.x
  const start_y = pixel_position.y
  let latest_click_time = latest_start_time.value

  // if pixel log has previous entry, set latest_click_interval
  if (pixel_log.value.length > 0) {
    latest_click_time = latest_start_time.value + pixel_log.value[pixel_log.value.length - 1].click_tick
    console.log(pixel_log.value[pixel_log.value.length - 1].click_tick)
    console.log(latest_click_time)
  }

  pixel_log.value.push(
    {
      start_x: start_x, 
      start_y: start_y,
      end_x: target_x, 
      end_y: target_y,
      delta_x: delta_x, 
      delta_y: delta_y,
      click_tick: event_time - latest_click_time,
    }
  )

  console.log('start moving pixel', pixel_log.value)

  //start the animation
  requestAnimationFrame(() => step(event_time, travel_duration, start_x, start_y, delta_x, delta_y, pixel_position))
}

function step(event_time, travel_duration, start_x, start_y, delta_x, delta_y, pixel_position) {
  const elapsed = (Date.now() - event_time) / 1000
  if (elapsed >= travel_duration) {
    pixel_position.x = start_x + delta_x
    pixel_position.y = start_y + delta_y
  }
  else {
    pixel_position.x = start_x + delta_x * (elapsed / travel_duration)
    pixel_position.y = start_y + delta_y * (elapsed / travel_duration)
    requestAnimationFrame(() => step(event_time, travel_duration, start_x, start_y, delta_x, delta_y, pixel_position))
  }
}

function start_recording() {
  if (is_animating.value) {
    return
  }
  console.log('start animation recording')
  is_animating.value = true

  reset_pixel_position()
  start_timer()
}

function save_pixel_log() {
  pixeldance_store.store_pixel_dance(
    pixel_log.value,
    pixel_color.value,
  )
  pixel_log.value = []
}

function stop_recording() {
  is_animating.value = false
  clear_timer()
  save_pixel_log()
}

onUnmounted(() => {
  stop_recording()
})

</script>