<template>
  <div id="project-banner-entry-container">
    <div id="banner-container"></div>
    <p id="title">{{ props.title }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>()
</script>

<style lang="scss" scoped>
#project-banner-entry-container {
  margin-bottom: 50px;

  #banner-container {
    border: 1px solid black;
    width: 100%;
    height: 250px;

    background-image: linear-gradient(to right, gold, white);
  }

  #title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
  }
}
</style>
