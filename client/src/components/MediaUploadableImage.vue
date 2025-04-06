<template>
  <div id="media-upload-image-container">
    <img v-if="imgUrl" :src="imgUrl" />
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
import ImageUploadHandler from '@/utilities/ImageUploadHandler'
import { useTemplateRef } from 'vue'
import { onUpdated } from 'vue'

const props = defineProps<{
  allowUpload: boolean
  imgUrl: string
  onImageLoaded: (arg0: string) => void
}>()

const uploadButton = useTemplateRef('upload-button')

function onUploadImageClick() {
  uploadButton.value?.click()
}

function handleFileUpload(event: Event) {
  props.onImageLoaded(ImageUploadHandler.uploadImage(event.target!.files![0]))
}

onUpdated(() => {
  console.log('Updating media uploadable image: ' + props.allowUpload)
  console.log('Updating media uploadable image: ' + props.imgUrl)
})
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
