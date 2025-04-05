<template>
  <div id="media-upload-image-container">
    <div v-if="showUpload"></div>
    <img v-else :src="imgUrl" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ showUpload: boolean; imgUrl: string }>()
console.log('Media uploadable image')
console.log(props.imgUrl)
</script>

<style lang="scss" scoped>
#media-upload-image-container {
  width: 100%;
  height: 100%;
  div,
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
