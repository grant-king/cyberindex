<template>
<div>
    WEB GPU DEMO
</div>
<div>
    <canvas id="gpu-demo-canvas"></canvas>   
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const canvas = ref(null)
const adapter = ref(null)
const device = ref(null)
const context = ref(null)
const canvas_format = ref(null)
const encoder = ref(null)


onMounted(async () => {
    canvas.value = document.getElementById('gpu-demo-canvas')
    if (!navigator.gpu) {
        throw new Error('WebGPU not supported')
    }
    adapter.value = await navigator.gpu.requestAdapter()
    if (!adapter.value) {
        throw new Error('No adapter found')
    }
    console.log(adapter.value)
    device.value = await adapter.value.requestDevice()
    context.value = canvas.value.getContext('webgpu')
    canvas_format.value = navigator.gpu.getPreferredCanvasFormat()
    context.value.configure({
        device: device.value,
        format: canvas_format.value
    })
    encoder.value = device.value.createCommandEncoder()
    const pass = encoder.value.beginRenderPass({
        colorAttachments: [{
            view: context.value.getCurrentTexture().createView(),
            loadOp: 'clear',
            storeOp: 'store'
        }]
    })

})


</script>