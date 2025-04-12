<template>
  <div>
    <ProjectView
      v-if="!!categoryName && !!projectName"
      :projectName="route.query.projectName"
      :is-admin="true"
    />
    <CreateProject v-else :on-project-created="onProjectCreated" />
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import ProjectView from './ProjectView.vue'
import CreateProject from '@/components/adminview/CreateProject.vue'

const route = useRoute()

const categoryName: Ref<string | null> = ref(null)
const projectName: Ref<string | null> = ref(null)

function onProjectCreated(category: string, project: string) {
  categoryName.value = category
  projectName.value = project
}
</script>

<style lang="scss" scoped></style>
