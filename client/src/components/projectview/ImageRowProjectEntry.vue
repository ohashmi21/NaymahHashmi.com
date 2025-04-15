<template>
  <div id="image-row-project-entry-container">
    <div id="images-container">
      <!-- v-for is not 0-indexed; starts with index 1 -->
      <div
        class="single-image-container"
        v-for="index in Math.min(itemsToShow, MAX_ITEM_COUNT)"
        v-bind:key="`image-item-${index}`"
      >
        <MediaUploadableImage
          v-if="index - 1 < props.contentModel.azureFileName.length || isAdmin"
          :allow-upload="isAdmin && index - 1 == indexOfUploadImageButton"
          :azure-file-name="contentModel.azureFileName[index - 1] ?? ''"
          :file-name="FileNameUtilties.generateBlobName(categoryName, projectName)"
          :on-image-loaded="onImageUploaded"
        />
      </div>
    </div>
    <div id="project-caption-container">
      <TitleAndCaption
        :content-model="contentModel"
        :is-admin="isAdmin"
        :on-title-updated="onTitleUpdated"
        :on-caption-updated="onCaptionUpdated"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type ProjectContentModel from '@/models/ProjectContentModel'
import MediaUploadableImage from '@/components/MediaUploadableImage.vue'
import { onMounted, onUpdated, ref } from 'vue'
import TitleAndCaption from '../TitleAndCaption.vue'
import FileNameUtilties from '@/utilities/FileNameUtilities'

const props = defineProps<{
  categoryName: string
  projectName: string
  contentModel: ProjectContentModel
  isAdmin: boolean
  onImageUploaded: (arg0: string) => void
  onTitleUpdated: (arg0: string) => void
  onCaptionUpdated: (arg0: string) => void
}>()
const MAX_ITEM_COUNT = 4

const indexOfUploadImageButton = ref(-1)
const itemsToShow = ref(0)

function updateIndexOfUploadImageButton() {
  if (props.isAdmin) {
    indexOfUploadImageButton.value = Math.min(
      props.contentModel.azureFileName.length,
      MAX_ITEM_COUNT,
    )
    itemsToShow.value = indexOfUploadImageButton.value + 1
  } else {
    itemsToShow.value = props.contentModel.azureFileName.length
  }
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
    border: var(--image-border-width) dashed black;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    .single-image-container {
      flex-grow: 1;
      padding: 15px;
    }
  }

  #project-caption-container {
    margin-top: 15px;
  }
}
</style>
