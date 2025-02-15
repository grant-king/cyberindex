<template>
    <div>
        WEB GPU DEMO
        <a href="https://codelabs.developers.google.com/your-first-webgpu-app">:: REFERENCE ::</a>
    </div>
    <div class="">
        <canvas id="gpu-demo-canvas" class="min-w-full"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import vertexshadercode from './shaders/vertex_main.wgsl?raw'
import fragmentshadercode from './shaders/fragment_main.wgsl?raw'

const GRID_SIZE = 8

const canvas = ref(null)
const adapter = ref(null)
const device = ref(null)
const context = ref(null)
const canvas_format = ref(null)
const encoder = ref(null)
const verticies = new Float32Array([
    // x, y
    // triangle 1
    -0.8, -0.8,
    0.8, -0.8,
    0.8, 0.8,
    // triangle 2
    -0.8, -0.8,
    0.8, 0.8,
    -0.8, 0.8
])



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

    // create a uniform buffer that describes the grid
    const uniform_array = new Float32Array([GRID_SIZE, GRID_SIZE])
    const uniform_buffer = device.value.createBuffer({
        label: "grid uniforms",
        size: uniform_array.byteLength,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    })
    // write to device
    device.value.queue.writeBuffer(uniform_buffer, 0, uniform_array)

    // create vertex buffer ready to accept verticies
    const vertex_buffer = device.value.createBuffer({
        label: 'cell verticies',
        size: verticies.byteLength,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    })
    // copy vertex data into device's memory
    device.value.queue.writeBuffer(vertex_buffer, /*bufferOffset=*/0, verticies)

    // define the vetex layout
    const vertex_buffer_layout = {
        arrayStride: 8,
        attributes: [
            {
                format: "float32x2",
                offset: 0,
                shaderLocation: 0,
            }
        ],
    }

    // define the cell shader module
    const cell_shader_module = device.value.createShaderModule(
        {
            label: "cell shader",
            code: vertexshadercode + fragmentshadercode
        }
    )

    context.value = canvas.value.getContext('webgpu')
    canvas_format.value = navigator.gpu.getPreferredCanvasFormat()

    // create a render pipeline
    const cell_pipeline = device.value.createRenderPipeline({
        label: "cell pipeline",
        layout: "auto",
        vertex: {
            module: cell_shader_module,
            entryPoint: "vertexMain",
            buffers: [vertex_buffer_layout]
        },
        fragment: {
            module: cell_shader_module,
            entryPoint: "fragmentMain",
            targets: [{
                format: canvas_format.value
            }]
        }
    })

    // create a bind group
    const bind_group = device.value.createBindGroup({
        label: "cell renderer bind group",
        layout: cell_pipeline.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: { buffer: uniform_buffer},
        }],
    })

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

    //pipeline
    pass.setPipeline(cell_pipeline)
    pass.setVertexBuffer(0, vertex_buffer)

    pass.setBindGroup(0, bind_group)

    pass.draw(verticies.length / 2, GRID_SIZE * GRID_SIZE) // 6 verticies

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