<template>
  <div id="project-view-container">
    <ProjectBannerEntry
      :img-url="project.projectBannerImgUrl"
      :title="project.projectName"
      :is-admin="isAdmin"
      :on-image-uploaded="onBannerImageUploaded"
      :on-title-updated="onTitleUpdated"
    />
    <div v-for="entry in project.projectContent" :key="entry.title">
      <ProjectPageEntry :projectEntry="entry" :is-admin="isAdmin" />
    </div>
    <div id="add-entry-container">
      <div v-if="isAdmin" id="add-entry-button" :onclick="() => toggleShowAddEntryList()">
        <p>+</p>
      </div>
      <ul id="add-entry-options-container" v-if="showAddEntryList">
        <li v-for="action in supportedActions" :key="action" :onclick="() => addEntry(action)">
          {{ action }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ProjectPageEntry from '@/components/projectview/ProjectPageEntry.vue'
import { useRouter, useRoute } from 'vue-router'
import ProjectModel from '@/models/ProjectModel'
import { useProjects } from '@/stores/Projects'
import ProjectBannerEntry from '@/components/projectview/ProjectBannerEntry.vue'
import ProjectContentModel from '@/models/ProjectContentModel'
import { ProjectEntryType } from '@/models/ProjectEntryType'
import { ref } from 'vue'

const props = defineProps<{ isAdmin: boolean }>()

const router = useRouter()
const projectsStore = useProjects()
const route = useRoute()
const projectName = route.query.projectName as string | undefined

const supportedActions: ProjectEntryType[] = [
  Object.values(ProjectEntryType)[0],
  Object.values(ProjectEntryType)[1],
  Object.values(ProjectEntryType)[2],
]

const showAddEntryList = ref(false)

if (!projectExists(projectName) && !props.isAdmin) {
  router.replace({ name: 'home' })
}

const project: ProjectModel = reactive(
  props.isAdmin ? new ProjectModel('', '', '', []) : projectsStore.projects.get(projectName!)!,
)

function onBannerImageUploaded(imgUrl: string) {
  project.projectBannerImgUrl = imgUrl
}

function onTitleUpdated(title: string) {
  project.projectName = title
}

function projectExists(projectName: string | undefined): boolean {
  return !!projectName && !!projectsStore.projects.get(projectName!)
}

function addEntry(entryType: ProjectEntryType) {
  toggleShowAddEntryList()
  project.projectContent.push(new ProjectContentModel(entryType, '', []))
}

function toggleShowAddEntryList() {
  showAddEntryList.value = !showAddEntryList.value
}
</script>

<style lang="scss" scoped>
#project-view-container {
  width: 1000px;

  #add-entry-container {
    position: relative;
    margin: auto;

    width: fit-content;

    #add-entry-button {
      position: relative;
      margin: auto;
      width: 50px;
      height: 50px;
      border: 1px solid var(--color);
      border-radius: 100%;
      background-color: grey;

      &:hover {
        cursor: pointer;
      }

      p {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-60%);
        font-size: 50px;
      }
    }

    #add-entry-options-container {
      list-style: none;
      margin: auto;
      flex-direction: column;
      width: 100px;
      padding: 0;

      li {
        background-color: grey;
        border: 1px solid black;
        height: 50px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
