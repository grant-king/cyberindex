<template>
    
    <a-scene physics>
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" dynamic-body></a-box>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" static-body></a-sphere>
        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" static-body></a-cylinder>
        <a-plane position="0 0 -4" rotation="-90 0 0" width="160" height="160" color="#1ACf11" static-body></a-plane>
        <a-sky color="#ECECEC"></a-sky>
    </a-scene>

</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const script = document.createElement('script')
    script.src = 'https://aframe.io/releases/1.6.0/aframe.min.js'
    script.async = true
    document.head.appendChild(script)

    const script2 = document.createElement('script')
    script2.src = 'https://unpkg.com/aframe-physics-system@1.6.0/dist/aframe-physics-system.min.js'
    script2.async = true
    document.head.appendChild(script2)

})

</script>