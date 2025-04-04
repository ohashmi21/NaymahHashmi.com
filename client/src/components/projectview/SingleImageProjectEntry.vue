<template>
  <div id="single-image-project-entry-container">
    <img :src="props.contentModel.imageUrls[0]" class="image-item" />
    <p id="title">{{ props.contentModel.title }}</p>
  </div>
</template>

<script setup lang="ts">
import type ProjectContentModel from '@/models/ProjectContentModel'

const props = defineProps<{ contentModel: ProjectContentModel }>()
</script>

<style lang="scss" scoped>
#single-image-project-entry-container {
  margin-bottom: 50px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;

  img {
    width: 500px;
  }
}
</style>
