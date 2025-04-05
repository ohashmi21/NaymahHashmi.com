<template>
  <div id="media-upload-image-container">
    <div v-if="showUpload">
      <button id="image-upload-input-container-button" :onclick="onUploadImageClick">
        <p>+</p>
        <input
          ref="upload-button"
          type="file"
          id="image-upload-input"
          name="filename"
          accept="image/*"
        />
      </button>
    </div>
    <img v-else-if="imgUrl" :src="imgUrl" />
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'

const props = defineProps<{ showUpload: boolean; imgUrl: string }>()

const uploadButton = useTemplateRef('upload-button')

function onUploadImageClick() {
  uploadButton.value?.click()
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

  div {
    height: 200px;
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
