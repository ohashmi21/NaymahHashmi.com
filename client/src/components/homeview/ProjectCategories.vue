<template>
  <nav>
    <ProjectCategory
      :key="category.categoryName"
      v-for="category in MockData.projects"
      :projectCategory="category"
    />
  </nav>
</template>

<script setup lang="ts">
import ProjectCategory from '@/components/homeview/ProjectCategory.vue'
import MockData from '@/assets/mockdata'
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
}
</style>
