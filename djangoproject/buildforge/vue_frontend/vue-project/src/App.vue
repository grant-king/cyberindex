<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/">::Main Menu::</RouterLink>
    <RouterLink to="/game">::Game::</RouterLink>
    <RouterLink to="/build">::Build::</RouterLink>
  </div>
  <div>
    <RouterView />
  </div>
</template>
