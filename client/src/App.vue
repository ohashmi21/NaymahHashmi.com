<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <div id="spacer"></div>
        <RouterLink to="/admin">Admin</RouterLink>
      </nav>
    </div>
  </header>

  <SiteHeader />
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
