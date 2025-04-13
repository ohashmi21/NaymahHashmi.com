<template>
  <div>
    <ProjectPage
      v-if="!!categoryId && !!categoryName && !!projectName"
      :category-id="categoryId"
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
import type ProjectCategoryModel from '@/models/ProjectCategoryModel'

const categoryId: Ref<string | null> = ref(null)
const categoryName: Ref<string | null> = ref(null)
const projectName: Ref<string | null> = ref(null)

function onProjectCreated(category: ProjectCategoryModel, project: string) {
  categoryId.value = category.uuid
  categoryName.value = category.categoryName
  projectName.value = project
}
</script>

<style lang="scss" scoped></style>
