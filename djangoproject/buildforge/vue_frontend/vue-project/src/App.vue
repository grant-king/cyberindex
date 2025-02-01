<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/">Main Menu</RouterLink>
  </div>
  <div>
    <RouterLink to="/game">Game</RouterLink>
  </div>
  <div>
    <RouterView />
  </div>
</template>
