<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
html {
  scroll-behavior: smooth;
  font-family: 'Segoe UI', 'Segoe UI', Calibri, sans-serif;
}
</style>
