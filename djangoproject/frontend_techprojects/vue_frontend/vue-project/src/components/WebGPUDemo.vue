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
            clearValue: { r: 0.0, g: 0.2, b: 0.0, a: 0.2 },
            storeOp: 'store'
        }]
    })
    // end the render pass
    pass.end()
    // create a handle to the recorded commands
    const command_buffer = encoder.value.finish()
    // submit the command buffer to the GPU's queue, takes a list of command buffers
    // once submitted, buffer can't be used again. build another command buffer to submit more commands
    
    device.value.queue.submit([command_buffer])
    // can also be one-liner
    // device.queue.submit([encoder.finish()])
})




</script>