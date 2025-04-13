<template>
  <nav>
    <ProjectCategory
      v-for="category in useAllProjectsByCategory().allProjectsByCategory"
      :key="category.categoryName"
      :projectCategory="category"
    />
  </nav>
</template>

<script setup lang="ts">
import ProjectCategory from '@/components/homeview/ProjectCategory.vue'
import { useAllProjectsByCategory } from '@/stores/Projects'
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
}
</style>
