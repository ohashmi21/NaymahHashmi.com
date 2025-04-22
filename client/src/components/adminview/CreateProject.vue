<template>
  <div ref="root" id="create-project-container">
    <p id="error-message">{{ errorMessage }}</p>
    <div id="form">
      <label>Category: </label>
      <select v-model="category" @change="onCategorySelected">
        <option
          v-for="category of categoriesStore.categories"
          :key="category.uuid"
          :value="category"
        >
          {{ category.categoryName }}
        </option>
      </select>
      <br />
      <br />
      <br />
      <label>Project Name: </label>
      <input v-model="projectName" type="text" hint="Enter Project Name" />
      <br />
      <br />
      <br />
      <div v-if="!!category" id="home-page-tile-intake-container">
        <label>Home Page Tile Image: </label>
        <div id="home-page-image">
          <MediaUploadableImage
            :allow-upload="true"
            azure-file-name=""
            :on-image-loaded="onImageUploaded"
            :file-name="FileNameUtilties.generateBlobName(category.categoryName, projectName)"
            class="image-item"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <button
        @click="onSubmit"
        :disabled="!category || !projectName || imageAzureName.trim().length == 0"
      >
        Create Project
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, ref, type Ref, onMounted } from 'vue'
import { useCategories } from '@/stores/Projects'
import type ProjectCategoryModel from '@/models/ProjectCategoryModel'
import MediaUploadableImage from '../MediaUploadableImage.vue'
import FileNameUtilties from '@/utilities/FileNameUtilities'

const props = defineProps<{
  onProjectCreated: (
    selectedCategory: ProjectCategoryModel,
    projectName: string,
    imageAzureName: string,
  ) => void
}>()

const root = useTemplateRef('root')

const categoriesStore = useCategories()

const category: Ref<ProjectCategoryModel | null> = ref(null)
const projectName = ref('')
const imageAzureName = ref('')
const errorMessage = ref('')

onMounted(() => {
  root.value?.style.setProperty('--overflow-value', 'visible')
  root.value?.style.setProperty('--project-tile-border-color', 'none')
})

function onCategorySelected() {
  root.value?.style.setProperty('--project-tile-border-color', category!.value!.colorHash)
}

function displayErrorMessage(missingField: string) {
  errorMessage.value = `Please make sure ${missingField} is not empty`
}

function onImageUploaded(azureFileName: string) {
  root.value?.style.setProperty('--overflow-value', 'hidden')
  imageAzureName.value = azureFileName
}

function onSubmit() {
  if (category.value == null) {
    displayErrorMessage('category')
  } else if (projectName.value.length == 0) {
    displayErrorMessage('project')
  } else {
    props.onProjectCreated(
      JSON.parse(JSON.stringify(category.value!)),
      projectName.value.trim(),
      imageAzureName.value,
    )
  }
}
</script>

<style lang="scss" scoped>
#create-project-container {
  margin: auto;
  width: 500px;

  #error-message {
    color: red;
    text-align: center;
  }

  #form {
    margin: auto;
    width: 100px;
  }

  #home-page-image {
    width: 80px;
    height: 80px;
    border: 1px solid var(--project-tile-border-color);
    border-radius: 100%;
    overflow: var(--overflow-value);
  }
}
</style>
