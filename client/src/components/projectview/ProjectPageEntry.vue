<template>
  <div id="project-page-entry-container">
    <ImageRowProjectEntry
      v-if="projectEntry.entryType == ProjectEntryType.IMAGE_ROW"
      :content-model="projectEntry"
      :is-admin="isAdmin"
    />
    <SingleImageProjectEntry
      v-if="projectEntry.entryType == ProjectEntryType.SINGLE_IMAGE"
      :content-model="projectEntry"
      :is-admin="isAdmin"
    />
    <LongImageProjectEntry
      v-if="projectEntry.entryType == ProjectEntryType.LONG_IMAGE"
      :content-model="projectEntry"
      :is-admin="isAdmin"
    />
  </div>
</template>

<script setup lang="ts">
import { ProjectEntryType } from '@/models/ProjectEntryType'
import ImageRowProjectEntry from './ImageRowProjectEntry.vue'
import SingleImageProjectEntry from './SingleImageProjectEntry.vue'
import LongImageProjectEntry from './LongImageProjectEntry.vue'
import ProjectContentModel from '@/models/ProjectContentModel'

defineProps<{ projectEntry: ProjectContentModel; isAdmin: boolean }>()
</script>

<style lang="scss" scoped>
#project-page-entry-container {
  position: relative;
  width: 100%;
}
</style>
