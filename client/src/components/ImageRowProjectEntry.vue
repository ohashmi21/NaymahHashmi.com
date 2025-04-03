<template>
  <div id="image-row-project-entry-container">
    <div id="images-container">
      <img
        :src="url"
        v-for="(url, index) in props.contentModel.imageUrls"
        v-bind:key="`image-item-${index}`"
        class="image-item"
      />
    </div>
    <p id="title">{{ props.contentModel.title }}</p>
  </div>
</template>

<script setup lang="ts">
import type ProjectContentModel from '@/models/ProjectContentModel'

const props = defineProps<{ contentModel: ProjectContentModel }>()
</script>

<style lang="scss" scoped>
#image-row-project-entry-container {
  margin-bottom: 50px;

  #images-container {
    border: 1px solid black;
    display: flex;
    flex-direction: row;
  }
}
</style>
