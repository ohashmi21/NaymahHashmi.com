<template>
  <div>
    <LoginPage v-if="!isLoggedIn" :login="login" />
    <ProjectPage
      v-else-if="!!categoryId && !!categoryName && !!projectName && !!homeTileImageAzureFileName"
      :category-id="categoryId"
      :category-name="categoryName"
      :projectName="projectName"
      :home-page-tile-image="homeTileImageAzureFileName"
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
import LoginPage from '@/components/adminview/LoginPage.vue'

const isLoggedIn: Ref<boolean> = ref(false)
const categoryId: Ref<string | null> = ref(null)
const categoryName: Ref<string | null> = ref(null)
const projectName: Ref<string | null> = ref(null)
const homeTileImageAzureFileName: Ref<string | null> = ref(null)

function login() {
  isLoggedIn.value = true
}

function onProjectCreated(category: ProjectCategoryModel, project: string, imageAzureName: string) {
  categoryId.value = category.uuid
  categoryName.value = category.categoryName
  projectName.value = project
  homeTileImageAzureFileName.value = imageAzureName
}
</script>

<style lang="scss" scoped></style>
