<template>
  <div ref="root" id="project-item-container">
    <div id="project-connector"></div>
    <div
      id="project-container"
      @click="
        () => {
          router.replace({ name: 'project', query: { categoryName, projectName } })
        }
      "
    >
      <MediaUploadableImage
        :allow-upload="false"
        :azure-file-name="tileImageAzureName"
        :on-image-loaded="() => {}"
        :file-name="FileNameUtilties.generateBlobName(categoryName, projectName)"
        class="image-item"
      />
    </div>
    <p id="project-name">{{ props.projectName }}</p>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted, onUpdated } from 'vue'
import { useRouter } from 'vue-router'
import MediaUploadableImage from '../MediaUploadableImage.vue'
import FileNameUtilties from '@/utilities/FileNameUtilities'

const props = defineProps<{
  categoryName: string
  projectName: string
  tileImageAzureName: string
  color: string
  show: boolean
}>()
const root = useTemplateRef('root')
const router = useRouter()

onMounted(() => {
  root.value?.style.setProperty('--color', props.color)
})

onUpdated(() => {
  if (props.show) {
    root.value?.classList.add('show')
    root.value?.classList.remove('hide')
  } else {
    root.value?.classList.add('hide')
    root.value?.classList.remove('show')
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
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }
  }

  #project-name {
    text-align: center;
    color: var(--color);
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
