<template>
  <div id="single-image-project-entry-container">
    <MediaUploadableImage
      :showUpload="false"
      :imgUrl="props.contentModel.imageUrls[0]"
      class="image-item"
    />
    <p id="title">{{ props.contentModel.title }}</p>
  </div>
</template>

<script setup lang="ts">
import type ProjectContentModel from '@/models/ProjectContentModel'
import MediaUploadableImage from '@/components/MediaUploadableImage.vue'

const props = defineProps<{ contentModel: ProjectContentModel }>()
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
