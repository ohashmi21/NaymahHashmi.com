<template>
  <div id="long-image-project-entry-container">
    <div id="image-container">
      <MediaUploadableImage
        :allow-upload="isAdmin"
        :azure-file-name="props.contentModel.azureFileName[0]"
        :on-image-loaded="onImageUploaded"
        :file-name="FileNameUtilties.generateBlobName(categoryName, projectName)"
        class="image-item"
      />
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
</script>

<style lang="scss" scoped>
#long-image-project-entry-container {
  border: var(--image-border-width) dashed black;
  width: 100%;
  margin-bottom: 50px;

  #image-container {
    width: 100%;
    height: 200px;
  }

  #project-caption-container {
    margin-top: 15px;
  }
}
</style>
