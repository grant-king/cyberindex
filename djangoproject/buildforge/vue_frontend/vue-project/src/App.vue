<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-white/50 p-2">
    <RouterLink to="/">::Main Menu::</RouterLink>
    <RouterLink to="/game">::Game::</RouterLink>
    <RouterLink to="/build">::Build::</RouterLink>
  </div>
  <div>
    <RouterView />
  </div>
</template>
