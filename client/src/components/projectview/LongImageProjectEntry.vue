<template>
  <div id="long-image-project-entry-container">
    <div id="image-container">
      <MediaUploadableImage
        :showUpload="false"
        :imgUrl="props.contentModel.imageUrls[0]"
        class="image-item"
      />
    </div>
    <p id="title">{{ props.contentModel.title }}</p>
  </div>
</template>

<script setup lang="ts">
import type ProjectContentModel from '@/models/ProjectContentModel'
import MediaUploadableImage from '@/components/MediaUploadableImage.vue'

const props = defineProps<{ contentModel: ProjectContentModel }>()
</script>

<style lang="scss" scoped>
#long-image-project-entry-container {
  border: 1px solid black;
  width: 100%;
  margin-bottom: 50px;

  #image-container {
    width: 100%;
    height: 200px;
  }
}
</style>
