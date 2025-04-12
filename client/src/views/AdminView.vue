<template>
  <div>
    <ProjectPage
      v-if="!!categoryName && !!projectName"
      :category-name="categoryName"
      :projectName="projectName"
      :is-admin="true"
    />
    <CreateProject v-else :on-project-created="onProjectCreated" />
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import CreateProject from '@/components/adminview/CreateProject.vue'
import ProjectPage from '@/components/ProjectPage.vue'

const categoryName: Ref<string | null> = ref(null)
const projectName: Ref<string | null> = ref(null)

function onProjectCreated(category: string, project: string) {
  categoryName.value = category
  projectName.value = project
}
</script>

<style lang="scss" scoped></style>
