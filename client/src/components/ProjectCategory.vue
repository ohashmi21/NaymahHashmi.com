<template>
  <div ref="root" id="container">
    <div id="img-container">
      <div id="img-background"></div>
    </div>
    <p>{{ props.projectCategory.categoryName }}</p>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import ProjectCategoryModel from '@/models/ProjectCategoryModel'

const props = defineProps<{ projectCategory: ProjectCategoryModel }>()
const root = useTemplateRef('root')

onMounted(() => {
  root.value.style.setProperty('--color', props.projectCategory.colorHash)
})
</script>

<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
  margin: 50px;

  p {
    text-align: center;
  }

  #img-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    width: 100px;

    #img-background {
      margin: auto;
      background-color: var(--color);
      width: 80%;
      height: 80%;
      border-radius: 100%;
      animation: shrinkBackground 0.1s linear;
      animation-fill-mode: forwards;

      &:hover {
        animation: growBackground 0.1s linear;
        animation-fill-mode: forwards;
      }
    }
  }
}

@keyframes growBackground {
  0% {
    width: 80%;
    height: 80%;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}

@keyframes shrinkBackground {
  0% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 80%;
    height: 80%;
  }
}
</style>
