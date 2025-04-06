<template>
  <div id="single-image-project-entry-container">
    <MediaUploadableImage
      :allow-upload="isAdmin"
      :imgUrl="contentModel.imageUrls[0]"
      :on-image-loaded="onImageUploaded"
      class="image-item"
    />
    <p id="title">{{ contentModel.title }}</p>
  </div>
</template>

<script setup lang="ts">
import type ProjectContentModel from '@/models/ProjectContentModel'
import MediaUploadableImage from '@/components/MediaUploadableImage.vue'

defineProps<{
  contentModel: ProjectContentModel
  isAdmin: boolean
  onImageUploaded: (arg0: string) => void
}>()
</script>

<style lang="scss" scoped>
#single-image-project-entry-container {
  margin-bottom: 50px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;

  .image-item {
    width: 70%;
  }
}
</style>
