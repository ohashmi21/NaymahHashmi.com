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
          :allow-upload="isAdmin && index - 1 == indexOfUploadImageButton"
          :imgUrl="contentModel.imageUrls[index - 1] ?? ''"
          :file-name="FileNameUtilties.generateBlobName(categoryName, projectName)"
          :on-image-loaded="onImageUploaded"
        />
      </div>
    </div>
    <div id="project-caption-container">
      <EditableText
        :value="contentModel.title"
        :is-admin="isAdmin"
        :on-text-updated="onCaptionUpdated"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type ProjectContentModel from '@/models/ProjectContentModel'
import MediaUploadableImage from '@/components/MediaUploadableImage.vue'
import { onMounted, onUpdated, ref } from 'vue'
import EditableText from '../EditableText.vue'
import FileNameUtilties from '@/utilities/FileNameUtilities'

const props = defineProps<{
  categoryName: string
  projectName: string
  contentModel: ProjectContentModel
  isAdmin: boolean
  onImageUploaded: (arg0: string) => void
  onCaptionUpdated: (arg0: string) => void
}>()
const MAX_ITEM_COUNT = 4

const indexOfUploadImageButton = ref(-1)

function updateIndexOfUploadImageButton() {
  indexOfUploadImageButton.value = Math.min(props.contentModel.imageUrls.length, MAX_ITEM_COUNT)
}

onMounted(() => {
  updateIndexOfUploadImageButton()
})

onUpdated(() => {
  updateIndexOfUploadImageButton()
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
