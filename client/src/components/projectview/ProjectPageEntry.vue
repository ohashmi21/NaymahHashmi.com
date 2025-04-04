<template>
  <div id="project-page-entry-container">
    <ProjectBannerEntry :title="MockData.projects[0].projects[0].projectName" />
    <div v-for="entry in MockData.projectContent" :key="entry.title">
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
import MockData from '@/assets/mockdata'
import LongImageProjectEntry from './LongImageProjectEntry.vue'
import ProjectBannerEntry from './ProjectBannerEntry.vue'
</script>

<style lang="scss" scoped></style>
