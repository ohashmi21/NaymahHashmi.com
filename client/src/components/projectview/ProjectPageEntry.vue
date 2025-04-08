<template>
  <div id="project-page-entry-container">
    <ImageRowProjectEntry
      v-if="reactiveEntry.entry.entryType == ProjectEntryType.IMAGE_ROW"
      :content-model="reactiveEntry.entry"
      :is-admin="isAdmin"
      :on-image-uploaded="(imgUrl) => onImageUploaded(imgUrl)"
      :on-caption-updated="onCaptionUpdated"
    />
    <SingleImageProjectEntry
      v-if="reactiveEntry.entry.entryType == ProjectEntryType.SINGLE_IMAGE"
      :content-model="reactiveEntry.entry"
      :is-admin="isAdmin"
      :on-image-uploaded="(imgUrl) => onImageUploaded(imgUrl)"
      :on-caption-updated="onCaptionUpdated"
    />
    <LongImageProjectEntry
      v-if="reactiveEntry.entry.entryType == ProjectEntryType.LONG_IMAGE"
      :content-model="reactiveEntry.entry"
      :is-admin="isAdmin"
      :on-image-uploaded="(imgUrl) => onImageUploaded(imgUrl)"
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

const props = defineProps<{ projectEntry: ProjectContentModel; isAdmin: boolean }>()
const reactiveEntry = reactive({ entry: props.projectEntry })

function onImageUploaded(imgUrl: string) {
  reactiveEntry.entry.imageUrls = [...reactiveEntry.entry.imageUrls, imgUrl]
}

function onCaptionUpdated(caption: string) {
  reactiveEntry.entry.title = caption
}
</script>

<style lang="scss" scoped>
#project-page-entry-container {
  position: relative;
  width: 100%;
}
</style>
