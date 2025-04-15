<template>
  <div id="media-upload-image-container">
    <img v-if="localImgUrl" :src="localImgUrl" />
    <div id="image-upload-input-container" v-else-if="allowUpload">
      <button id="image-upload-input-container-button" :onclick="onUploadImageClick">
        <p>+</p>
        <input
          ref="upload-button"
          type="file"
          id="image-upload-input"
          name="filename"
          accept="image/*"
          v-on:change="handleFileUpload($event)"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AzureUtilities from '@/utilities/AzureUtilities'
import ImageUploadHandler from '@/utilities/ImageUploadHandler'
import { useTemplateRef, ref, onMounted } from 'vue'

const props = defineProps<{
  allowUpload: boolean
  azureFileName: string // Used to load image from Azure
  fileName: string // Used to name file if uploading to Azure
  onImageLoaded: (azureFileName: string) => void
}>()

const uploadButton = useTemplateRef('upload-button')

const localImgUrl = ref('')

onMounted(() => {
  if (!props.azureFileName) return

  AzureUtilities.retrieveBlobFromAzureByFileName(props.azureFileName).then((res) => {
    if (!!res) {
      localImgUrl.value = URL.createObjectURL(res)
    }
  })
})

function onUploadImageClick() {
  uploadButton.value?.click()
}

function buildFileNameWithExtention(fileNameWithoutExtension: string, extension: string): string {
  return `${fileNameWithoutExtension}.${extension}`
}

function getFileExtensionFromFile(file: File): string {
  // file.type is in format similar to image/png
  return file.type.split('/')[1]
}

function handleFileUpload(event: Event) {
  const file: File = (event.target! as HTMLInputElement).files![0]
  const fileName = buildFileNameWithExtention(props.fileName, getFileExtensionFromFile(file))
  ImageUploadHandler.uploadImage(fileName, file).then(() => {
    localImgUrl.value = URL.createObjectURL(file)
    props.onImageLoaded(fileName)
  })
}
</script>

<style lang="scss" scoped>
#media-upload-image-container {
  width: 100%;
  height: 100%;

  div,
  img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  #image-upload-input-container {
    min-height: 200px;
    height: 100%;
    #image-upload-input-container-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      height: 25px;
      width: 25px;

      p {
        margin: 0;
      }

      #image-upload-input {
        display: none;
      }
    }
  }
}
</style>
