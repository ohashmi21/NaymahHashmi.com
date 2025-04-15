<template>
  <div id="title-caption-container">
    <div id="title-editable-text">
      <EditableText
        :value="contentModel.title"
        :is-admin="isAdmin"
        font-size="16px"
        font-weight="bold"
        :on-text-updated="onTitleUpdated"
      />
    </div>
    <div id="caption-editable-text">
      <EditableText
        :value="contentModel.caption"
        :is-admin="isAdmin"
        font-size="16px"
        font-weight="normal"
        :on-text-updated="onCaptionUpdated"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type ProjectContentModel from '@/models/ProjectContentModel'
import EditableText from './EditableText.vue'

defineProps<{
  contentModel: ProjectContentModel
  isAdmin: boolean
  onTitleUpdated: (arg0: string) => void
  onCaptionUpdated: (arg0: string) => void
}>()
</script>

<style lang="scss" scoped>
#title-caption-container {
  #caption-editable-text {
    margin-top: 5px;
  }
}
</style>
