<template>
  <div id="single-image-project-entry-container">
    <MediaUploadableImage
      :allow-upload="isAdmin"
      :azure-file-name="contentModel.azureFileName[0]"
      :on-image-loaded="onImageUploaded"
      :file-name="FileNameUtilties.generateBlobName(categoryName, projectName)"
      class="image-item"
    />
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

defineProps<{
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
#single-image-project-entry-container {
  margin-bottom: 50px;
  border: var(--image-border-width) dashed black;
  display: flex;
  flex-direction: row;

  .image-item {
    width: 70%;
  }

  #project-caption-container {
    margin-left: 15px;
    width: 30%;
  }
}
</style>
