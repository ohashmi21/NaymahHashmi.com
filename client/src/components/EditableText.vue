<template>
  <div ref="root" id="editable-text-container">
    <p v-if="value.length > 0 || !isAdmin" id="text">{{ value }}</p>
    <div v-else id="edit-text-container">
      <textarea v-model="inputValue" type="text"></textarea>
      <button id="update-text-button" @click="onButtonClick">Update</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    value: string
    isAdmin: boolean
    fontSize?: string
    fontWeight?: string
    onTextUpdated: (arg0: string) => void
  }>(),
  {
    fontSize: '16px',
    fontWeight: 'normal',
  },
)

const root = ref<HTMLElement | null>(null)
const inputValue = ref('')

onMounted(() => {
  root.value?.style.setProperty('--font-size', props.fontSize)
  root.value?.style.setProperty('--font-weight', props.fontWeight)
})

function onButtonClick() {
  props.onTextUpdated(inputValue.value)
}
</script>

<style lang="scss" scoped>
#editable-text-container {
  p {
    margin: 0;
  }

  p,
  input[type='text'] {
    font-weight: var(--font-weight);
    font-size: var(--font-size);
  }
}
</style>
