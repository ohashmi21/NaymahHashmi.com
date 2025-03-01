<template>
  <div ref="root" id="container">
    <div id="img-container">
      <div id="dotted-lines">
        <div id="horizontal-dotted"></div>
        <div id="vertical-dashed"></div>
        <div id="vertical-dotted"></div>
      </div>
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
  root.value.style.setProperty('--background-color', props.projectCategory.colorHash + '40')
  root.value.style.setProperty('--dotted-color', props.projectCategory.colorHash + 'DD')
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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    width: 100px;

    #dotted-lines {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;

      #horizontal-dotted {
        position: absolute;
        border-top: 1.5px dotted var(--dotted-color);
        bottom: 25%;
        width: 80%;
        left: 10%;
      }

      #vertical-dashed {
        position: absolute;
        border-left: 1px dashed var(--dotted-color);
        height: 70%;
        left: 50%;
        bottom: 0;
        transform: translateX(-100%);
      }

      #vertical-dotted {
        position: absolute;
        border-left: 1.5px dotted var(--dotted-color);
        right: 25%;
        height: 65%;
        bottom: 25%;
      }
    }

    #img-background {
      margin: auto;
      background-color: var(--background-color);
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
