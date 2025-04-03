<template>
  <div id="project-page-entry-container">
    <ImageRowProjectEntry
      v-for="entry in MockData.projectContent"
      :content-model="entry"
      :key="entry.title"
    />
  </div>
</template>

<script setup lang="ts">
import ImageRowProjectEntry from './ImageRowProjectEntry.vue'
import MockData from '@/assets/mockdata'
</script>

<style lang="scss" scoped></style>
