<template>
  <div>
    <ProjectPageEntry :projectName="route.query.projectName" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ProjectPageEntry from '@/components/projectview/ProjectPageEntry.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  console.log(route)
  console.log(route.params)
  console.log(route.params.project)
})
</script>

<style lang="scss" scoped></style>
