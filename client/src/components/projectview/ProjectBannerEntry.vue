<template>
  <div id="project-banner-entry-container">
    <div id="project-title-container">
      <EditableText
        :value="projectName"
        :is-admin="isAdmin"
        font-size="24px"
        font-weight="bold"
        :on-text-updated="onTitleUpdated"
      />
    </div>
    <div id="banner-container">
      <MediaUploadableImage
        :allow-upload="isAdmin"
        :azure-file-name="azureFileName"
        :on-image-loaded="onImageUploaded"
        :file-name="FileNameUtilties.generateBlobName(categoryName, projectName)"
        class="image-item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MediaUploadableImage from '@/components/MediaUploadableImage.vue'
import EditableText from '@/components/EditableText.vue'
import FileNameUtilties from '@/utilities/FileNameUtilities'

defineProps<{
  categoryName: string
  projectName: string
  azureFileName: string
  isAdmin: boolean
  onImageUploaded: (arg0: string) => void
  onTitleUpdated: (arg0: string) => void
}>()
</script>

<style lang="scss" scoped>
#project-banner-entry-container {
  margin-bottom: 50px;

  #banner-container {
    border: var(--image-border-width) dashed black;
    width: 100%;
    height: 250px;
  }

  #project-title-container {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
