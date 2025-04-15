<template>
  <div ref="root" id="project-view-container">
    <ProjectBannerEntry
      :category-name="categoryName"
      :project-name="projectName"
      :azure-file-name="project.projectBannerAzureFileName"
      :is-admin="isAdmin"
      :on-image-uploaded="onBannerImageUploaded"
      :on-title-updated="onTitleUpdated"
    />
    <div v-for="entry in project.projectContent" :key="entry.title">
      <ProjectPageEntry
        :category-name="categoryName"
        :project-name="projectName"
        :projectEntry="entry"
        :is-admin="isAdmin"
      />
    </div>
    <div v-if="isAdmin" id="add-entry-container">
      <div id="add-entry-button" :onclick="() => toggleShowAddEntryList()">
        <p>+</p>
      </div>
      <ul id="add-entry-options-container" v-if="showAddEntryList">
        <li v-for="action in supportedActions" :key="action" :onclick="() => addEntry(action)">
          {{ action }}
        </li>
      </ul>
      <br />
      <br />
      <br />
      <p id="error-message">{{ errorMessage }}</p>
      <button id="save-project" @click="saveProject">Save Project</button>
    </div>
    <div id="home-link" @click="onHomeLinkClicked()">
      <p>Go Home</p>
      <p>&#9660;</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref, useTemplateRef } from 'vue'
import ProjectPageEntry from '@/components/projectview/ProjectPageEntry.vue'
import { useRouter } from 'vue-router'
import ProjectModel from '@/models/ProjectModel'
import { useProjects } from '@/stores/Projects'
import ProjectBannerEntry from '@/components/projectview/ProjectBannerEntry.vue'
import ProjectContentModel from '@/models/ProjectContentModel'
import { ProjectEntryType } from '@/models/ProjectEntryType'
import ProjectsService from '@/services/ProjectsService'

const props = defineProps<{
  categoryId: string
  categoryName: string
  projectName: string
  isAdmin: boolean
}>()

const root = useTemplateRef('root')

const router = useRouter()
const projectsStore = useProjects()

const supportedActions: ProjectEntryType[] = [
  Object.values(ProjectEntryType)[0],
  Object.values(ProjectEntryType)[1],
  Object.values(ProjectEntryType)[2],
]

const showAddEntryList = ref(false)
const errorMessage = ref('')

if (!projectExists(props.projectName) && !props.isAdmin) {
  router.replace({ name: 'home' })
}

const project: ProjectModel = reactive(
  props.isAdmin
    ? new ProjectModel('', props.projectName, '', [])
    : projectsStore.projects.get(props.projectName!)!,
)

onMounted(() => {
  root.value?.style.setProperty('--image-border-width', props.isAdmin ? '1px' : '0px')
})

function onBannerImageUploaded(azureFileName: string) {
  project.projectBannerAzureFileName = azureFileName
}

function onTitleUpdated(title: string) {
  project.projectName = title
}

function projectExists(projectName: string | undefined): boolean {
  return !!projectName && !!projectsStore.projects.get(projectName!)
}

function addEntry(entryType: ProjectEntryType) {
  toggleShowAddEntryList()
  project.projectContent.push(new ProjectContentModel(entryType, '', '', []))
}

function toggleShowAddEntryList() {
  showAddEntryList.value = !showAddEntryList.value
}

function showErrorMessage(message: string) {
  errorMessage.value = message
}

function projectEntriesAreValid(): boolean {
  for (const entry of project.projectContent) {
    if (entry.azureFileName.length == 0) {
      return false
    }
  }
  return true
}

function saveProject() {
  if (project.projectBannerAzureFileName.length == 0) {
    showErrorMessage('Banner Image is empty')
  } else if (!projectEntriesAreValid()) {
    showErrorMessage('Verify all project entries have at least one image added')
  } else {
    showErrorMessage('')
    ProjectsService.uploadProject(props.categoryId, JSON.parse(JSON.stringify(project)))
  }
}

function onHomeLinkClicked() {
  router.replace({ name: 'home' })
}
</script>

<style lang="scss" scoped>
#project-view-container {
  margin-top: 125px;
  width: 1000px;

  #home-link {
    cursor: pointer;
    text-align: center;
    position: fixed;
    left: 0%;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    color: grey;

    p {
      margin: 0;

      & + p {
        margin-top: 10px;
      }
    }
  }

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

    #error-message {
      color: red;
    }
  }
}
</style>
