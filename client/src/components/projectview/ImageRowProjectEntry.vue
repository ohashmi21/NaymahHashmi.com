<template>
  <div id="image-row-project-entry-container">
    <div id="images-container">
      <div
        class="single-image-container"
        v-for="index in MAX_ITEM_COUNT"
        v-bind:key="`image-item-${index}`"
      >
        <MediaUploadableImage
          v-if="index - 1 < props.contentModel.imageUrls.length"
          :showUpload="false"
          :imgUrl="props.contentModel.imageUrls[index - 1]"
        />
      </div>
    </div>
    <p id="title">{{ props.contentModel.title }}</p>
  </div>
</template>

<script setup lang="ts">
import type ProjectContentModel from '@/models/ProjectContentModel'
import MediaUploadableImage from '@/components/MediaUploadableImage.vue'

const props = defineProps<{ contentModel: ProjectContentModel }>()
const MAX_ITEM_COUNT = 4
</script>

<style lang="scss" scoped>
#image-row-project-entry-container {
  margin-bottom: 50px;

  #images-container {
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    .single-image-container {
      width: 25%;
    }
  }
}
</style>
