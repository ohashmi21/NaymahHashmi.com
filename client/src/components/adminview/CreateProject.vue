<template>
  <div id="create-project-container">
    <p id="error-message">{{ errorMessage }}</p>
    <div id="form">
      <label>Category: </label>
      <select v-model="category">
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
      <button @click="onSubmit">Create Project</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useCategories } from '@/stores/Projects'
import type ProjectCategoryModel from '@/models/ProjectCategoryModel'

const props = defineProps<{
  onProjectCreated: (selectedCategory: ProjectCategoryModel, projectName: string) => void
}>()

const categoriesStore = useCategories()

const category: Ref<ProjectCategoryModel | null> = ref(null)
const projectName = ref('')
const errorMessage = ref('')

function displayErrorMessage(missingField: string) {
  errorMessage.value = `Please make sure ${missingField} is not empty`
}

function onSubmit() {
  if (category.value == null) {
    displayErrorMessage('category')
  } else if (projectName.value.length == 0) {
    displayErrorMessage('project')
  } else {
    props.onProjectCreated(JSON.parse(JSON.stringify(category.value!)), projectName.value.trim())
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
}
</style>
