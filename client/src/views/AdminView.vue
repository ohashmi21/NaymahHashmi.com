<template>
  <div>
    <ProjectView :projectName="route.query.projectName" :is-admin="true" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import ProjectView from './ProjectView.vue'

const route = useRoute()
</script>

<style lang="scss" scoped></style>
