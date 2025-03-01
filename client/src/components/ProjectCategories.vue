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
import ProjectCategory from '@/components/ProjectCategory.vue'
import MockData from '@/assets/mockdata'
</script>

<style lang="scss" scoped>
nav {
  width: min-content;
  margin: 150px auto auto auto;
  display: flex;
  flex-direction: row;
}
</style>
