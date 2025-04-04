<template>
  <div id="long-image-project-entry-container">
    <div id="image-container">
      <img :src="props.contentModel.imageUrls[0]" class="image-item" />
    </div>
    <p id="title">{{ props.contentModel.title }}</p>
  </div>
</template>

<script setup lang="ts">
import type ProjectContentModel from '@/models/ProjectContentModel'

const props = defineProps<{ contentModel: ProjectContentModel }>()
</script>

<style lang="scss" scoped>
#long-image-project-entry-container {
  margin-bottom: 50px;

  #image-container {
    border: 1px solid black;
    width: 100%;

    img {
      width: 100%;
      height: 200px;
    }
  }
}
</style>
