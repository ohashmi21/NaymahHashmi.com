<template>
  <div
    ref="root"
    id="project-category-container"
    @mouseover="showProjects = true"
    @mouseout="showProjects = false"
  >
    <div ref="imgContainer" id="img-container">
      <div id="dotted-lines">
        <div id="horizontal-dotted"></div>
        <div id="vertical-dashed"></div>
        <div id="vertical-dotted"></div>
      </div>
      <div id="img-background"></div>
    </div>
    <p>{{ props.projectCategory.categoryName.toUpperCase() }}</p>
    <div id="project-items-container">
      <ProjectItem
        v-for="project in props.projectCategory.projects"
        :key="project.projectName"
        :project="project"
        :color="props.projectCategory.colorHash"
        :show="showProjects"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted, ref } from 'vue'
import ProjectCategoryModel from '@/models/ProjectCategoryModel'
import ProjectItem from './ProjectItem.vue'

const props = defineProps<{ projectCategory: ProjectCategoryModel }>()
const root = useTemplateRef('root')

const showProjects = ref(false)

onMounted(() => {
  root.value.style.setProperty('--background-color', props.projectCategory.colorHash + '40')
  root.value.style.setProperty('--dotted-color', props.projectCategory.colorHash + 'DD')
  root.value.style.setProperty('--text-color', props.projectCategory.colorHash)
})
</script>

<style lang="scss" scoped>
#project-category-container {
  display: flex;
  flex-direction: column;
  margin: 0 50px;

  p {
    text-align: center;
    margin: 25px 0 0 0;
    font-weight: bold;
    color: var(--text-color);
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
