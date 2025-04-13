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
import EditableText from '../EditableText.vue'
import FileNameUtilties from '@/utilities/FileNameUtilities'

defineProps<{
  categoryName: string
  projectName: string
  contentModel: ProjectContentModel
  isAdmin: boolean
  onImageUploaded: (arg0: string) => void
  onCaptionUpdated: (arg0: string) => void
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
