<template>
  <div id="project-page-entry-container">
    <ImageRowProjectEntry
      v-if="reactiveEntry.entry.entryType == ProjectEntryType.IMAGE_ROW"
      :category-name="categoryName"
      :project-name="projectName"
      :content-model="reactiveEntry.entry"
      :is-admin="isAdmin"
      :on-image-uploaded="(azureFileName) => onImageUploaded(azureFileName)"
      :on-title-updated="onTitleUpdated"
      :on-caption-updated="onCaptionUpdated"
    />
    <SingleImageProjectEntry
      v-if="reactiveEntry.entry.entryType == ProjectEntryType.SINGLE_IMAGE"
      :category-name="categoryName"
      :project-name="projectName"
      :content-model="reactiveEntry.entry"
      :is-admin="isAdmin"
      :on-image-uploaded="(azureFileName) => onImageUploaded(azureFileName)"
      :on-title-updated="onTitleUpdated"
      :on-caption-updated="onCaptionUpdated"
    />
    <LongImageProjectEntry
      v-if="reactiveEntry.entry.entryType == ProjectEntryType.LONG_IMAGE"
      :category-name="categoryName"
      :project-name="projectName"
      :content-model="reactiveEntry.entry"
      :is-admin="isAdmin"
      :on-image-uploaded="(azureFileName) => onImageUploaded(azureFileName)"
      :on-title-updated="onTitleUpdated"
      :on-caption-updated="onCaptionUpdated"
    />
  </div>
</template>

<script setup lang="ts">
import { ProjectEntryType } from '@/models/ProjectEntryType'
import ImageRowProjectEntry from './ImageRowProjectEntry.vue'
import SingleImageProjectEntry from './SingleImageProjectEntry.vue'
import LongImageProjectEntry from './LongImageProjectEntry.vue'
import ProjectContentModel from '@/models/ProjectContentModel'
import { reactive } from 'vue'

const props = defineProps<{
  categoryName: string
  projectName: string
  projectEntry: ProjectContentModel
  isAdmin: boolean
}>()

const reactiveEntry = reactive({ entry: props.projectEntry })

function onImageUploaded(azureFileName: string) {
  reactiveEntry.entry.azureFileName = [...reactiveEntry.entry.azureFileName, azureFileName]
}

function onTitleUpdated(title: string) {
  reactiveEntry.entry.title = title
}

function onCaptionUpdated(caption: string) {
  reactiveEntry.entry.caption = caption
}
</script>

<style lang="scss" scoped>
#project-page-entry-container {
  position: relative;
  width: 100%;
}
</style>
