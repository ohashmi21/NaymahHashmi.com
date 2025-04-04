<template>
  <div id="project-page-entry-container">
    <ProjectBannerEntry :title="project.projectName" />
    <div v-for="entry in project.projectContent" :key="entry.title">
      <ImageRowProjectEntry
        v-if="entry.entryType == ProjectEntryType.IMAGE_ROW"
        :content-model="entry"
      />
      <SingleImageProjectEntry
        v-if="entry.entryType == ProjectEntryType.SINGLE_IMAGE"
        :content-model="entry"
      />
      <LongImageProjectEntry
        v-if="entry.entryType == ProjectEntryType.LONG_IMAGE"
        :content-model="entry"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProjectEntryType } from '@/models/ProjectEntryType'
import ImageRowProjectEntry from './ImageRowProjectEntry.vue'
import SingleImageProjectEntry from './SingleImageProjectEntry.vue'
import LongImageProjectEntry from './LongImageProjectEntry.vue'
import ProjectBannerEntry from './ProjectBannerEntry.vue'
import { useProjects } from '@/stores/Projects'
import type ProjectModel from '@/models/ProjectModel'

const props = defineProps<{ projectName: string }>()
const projectsStore = useProjects()

console.log(props.projectName)
const project: ProjectModel = projectsStore.projects.get(props.projectName)!
</script>

<style lang="scss" scoped></style>
