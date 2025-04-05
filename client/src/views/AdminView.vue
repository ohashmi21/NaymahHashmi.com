<template>
  <div>
    <ProjectPageEntry :projectName="route.query.projectName" :is-admin="true" />
  </div>
</template>

<script setup lang="ts">
import ProjectPageEntry from '@/components/projectview/ProjectPageEntry.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped></style>
