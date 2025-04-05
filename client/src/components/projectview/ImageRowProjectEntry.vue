<template>
  <div id="image-row-project-entry-container">
    <div id="images-container">
      <!-- v-for is not 0-indexed; starts with index 1 -->
      <div
        class="single-image-container"
        v-for="index in MAX_ITEM_COUNT"
        v-bind:key="`image-item-${index}`"
      >
        <MediaUploadableImage
          v-if="index - 1 < props.contentModel.imageUrls.length || isAdmin"
          :showUpload="isAdmin && index - 1 == indexOfUploadImageButton"
          :imgUrl="props.contentModel.imageUrls[index - 1] ?? ''"
        />
      </div>
    </div>
    <p id="title">{{ props.contentModel.title }}</p>
  </div>
</template>

<script setup lang="ts">
import type ProjectContentModel from '@/models/ProjectContentModel'
import MediaUploadableImage from '@/components/MediaUploadableImage.vue'
import { onMounted, ref } from 'vue'

const props = defineProps<{ contentModel: ProjectContentModel; isAdmin: boolean }>()
const MAX_ITEM_COUNT = 4

const indexOfUploadImageButton = ref(-1)

onMounted(() => {
  console.log(props.contentModel.imageUrls.length)
  indexOfUploadImageButton.value = Math.min(props.contentModel.imageUrls.length, MAX_ITEM_COUNT)
  console.log(indexOfUploadImageButton)
})
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
