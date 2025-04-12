<template>
  <div id="create-project-container">
    <p id="error-message">{{ errorMessage }}</p>
    <div id="form">
      <label>Category: </label>
      <select v-model="categoryName">
        <option v-for="category of categoriesStore.categories" :key="category">
          {{ category }}
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
import { ref } from 'vue'
import { useCategories } from '@/stores/Projects'

const props = defineProps<{
  onProjectCreated: (categoryName: string, projectName: string) => void
}>()

const categoriesStore = useCategories()

const categoryName = ref('')
const projectName = ref('')
const errorMessage = ref('')

function displayErrorMessage(missingField: string) {
  errorMessage.value = `Please make sure ${missingField} is not empty`
}

function onSubmit() {
  if (categoryName.value.length == 0) {
    displayErrorMessage('category')
  } else if (projectName.value.length == 0) {
    displayErrorMessage('project')
  } else {
    props.onProjectCreated(categoryName.value, projectName.value)
  }
}

console.log(categoriesStore)
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
