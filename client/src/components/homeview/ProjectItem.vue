<template>
  <div ref="root" id="project-item-container">
    <div id="project-connector"></div>
    <div id="project-container"></div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted, onUpdated } from 'vue'
import ProjectModel from '@/models/ProjectModel'

const props = defineProps<{ project: ProjectModel; color: string; show: boolean }>()
const root = useTemplateRef('root')

onMounted(() => {
  root.value.style.setProperty('--color', props.color)
})

onUpdated(() => {
  if (props.show) {
    root.value.classList.add('show')
    root.value.classList.remove('hide')
  } else {
    root.value.classList.add('hide')
    root.value.classList.remove('show')
  }
})
</script>

<style lang="scss" scoped>
#project-item-container {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  display: none;

  &.show {
    animation: animateIn 0.2s linear;
    animation-fill-mode: forwards;
    display: block;
  }

  &.hide {
    display: block;
    animation: animateOut 0.2s linear;
    animation-fill-mode: forwards;
  }

  #project-connector {
    margin: 10px 50%;
    transform: translateX(-2.5px);
    height: 30px;
    border-left: 5px dashed var(--color);
  }

  #project-container {
    margin: auto;
    width: 80px;
    height: 80px;
    border: 1px solid var(--color);
    border-radius: 100%;
  }
}

@keyframes animateIn {
  0% {
    opacity: 0;
    margin-top: -100%;
  }
  100% {
    opacity: 1;
    margin-top: 0%;
  }
}
@keyframes animateOut {
  0% {
    opacity: 1;
    margin-top: 0%;
  }
  100% {
    opacity: 0;
    margin-top: -100%;
    display: none;
  }
}
</style>
