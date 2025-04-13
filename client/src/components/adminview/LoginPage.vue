<template>
  <div id="login-page-container">
    <p id="error-message">{{ errorMessage }}</p>
    <div id="form">
      <label>Password: </label>
      <input v-model="inputValue" type="text" />
      <br />
      <button @click="onSubmit">Login</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ login: () => void }>()

const inputValue = ref('')
const errorMessage = ref('')
const correctPassword = 'NaymahPortfolioAdminV2Password'

function displayErrorMessage() {
  errorMessage.value = `Password Incorrect`
}

function onSubmit() {
  if (inputValue.value !== correctPassword) {
    displayErrorMessage()
  } else {
    props.login()
  }
}
</script>

<style lang="scss" scoped>
#error-message {
  color: red;
}
</style>
