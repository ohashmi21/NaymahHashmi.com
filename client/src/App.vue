<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <SiteHeader />
  </header>

  <div id="portfolio-body">
    <RouterView />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  font-family: 'Segoe UI', 'Segoe UI', Calibri, sans-serif;

  #portfolio-body {
    width: min-content;
    margin: auto;
  }

  #spacer {
    display: inline-block;
    width: 50px;
  }
}
</style>
