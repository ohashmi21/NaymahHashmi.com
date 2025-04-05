<template>
  <div id="project-page-entry-container">
    <ProjectBannerEntry :title="project.projectName" />
    <div v-for="entry in project.projectContent" :key="entry.title">
      <ImageRowProjectEntry
        v-if="entry.entryType == ProjectEntryType.IMAGE_ROW"
        :content-model="entry"
      />
      <SingleImageProjectEntry
        v-if="entry.entryType == ProjectEntryType.SINGLE_IMAGE"
        :content-model="entry"
      />
      <LongImageProjectEntry
        v-if="entry.entryType == ProjectEntryType.LONG_IMAGE"
        :content-model="entry"
      />
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
import { ProjectEntryType } from '@/models/ProjectEntryType'
import ImageRowProjectEntry from './ImageRowProjectEntry.vue'
import SingleImageProjectEntry from './SingleImageProjectEntry.vue'
import LongImageProjectEntry from './LongImageProjectEntry.vue'
import ProjectBannerEntry from './ProjectBannerEntry.vue'
import { useProjects } from '@/stores/Projects'
import ProjectModel from '@/models/ProjectModel'
import { ref } from 'vue'
import ProjectContentModel from '@/models/ProjectContentModel'
import MockData from '@/assets/mockdata'

const props = defineProps<{ projectName: string; isAdmin: boolean }>()
const projectsStore = useProjects()

const project: ProjectModel = props.isAdmin
  ? new ProjectModel('', '', [])
  : projectsStore.projects.get(props.projectName)!

const supportedActions: ProjectEntryType[] = [
  Object.values(ProjectEntryType)[0],
  Object.values(ProjectEntryType)[1],
  Object.values(ProjectEntryType)[2],
]

const showAddEntryList = ref(false)

function toggleShowAddEntryList() {
  showAddEntryList.value = !showAddEntryList.value
}

function addEntry(entryType: ProjectEntryType) {
  toggleShowAddEntryList()
  project.projectContent.push(
    new ProjectContentModel(entryType, 'Some title is being added', [MockData.mockImageUrl]),
  )
}
</script>

<style lang="scss" scoped>
#project-page-entry-container {
  position: relative;
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
