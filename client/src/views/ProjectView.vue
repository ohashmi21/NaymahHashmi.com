<template>
  <div id="project-view-container">
    <ProjectPage
      category-id=""
      :category-name="categoryName!"
      :project-name="projectName!"
      home-page-tile-image=""
      :is-admin="false"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useProjects } from '@/stores/Projects'
import ProjectPage from '@/components/ProjectPage.vue'

const props = defineProps<{ isAdmin: boolean }>()

const router = useRouter()
const projectsStore = useProjects()
const route = useRoute()
const categoryName = route.query.categoryName as string | undefined
const projectName = route.query.projectName as string | undefined

if (!projectExists(projectName) && !props.isAdmin) {
  router.replace({ name: 'home' })
}

function projectExists(projectName: string | undefined): boolean {
  return !!projectName && !!projectsStore.projects.get(projectName!)
}
</script>

<style lang="scss" scoped>
#project-view-container {
  width: 1000px;

  #add-entry-container {
    position: relative;
    margin: auto;

    width: fit-content;

    #add-entry-button {
      position: relative;
      margin: auto;
      width: 50px;
      height: 50px;
      border: 1px solid var(--color);
      border-radius: 100%;
      background-color: grey;

      &:hover {
        cursor: pointer;
      }

      p {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-60%);
        font-size: 50px;
      }
    }

    #add-entry-options-container {
      list-style: none;
      margin: auto;
      flex-direction: column;
      width: 100px;
      padding: 0;

      li {
        background-color: grey;
        border: 1px solid black;
        height: 50px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
