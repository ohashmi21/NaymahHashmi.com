import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useCategories, useProjects, useAllProjectsByCategory } from '@/stores/Projects'

import App from './App.vue'
import router from './router'
import CategoriesService from './services/CategoriesService'
import ProjectsService from './services/ProjectsService'
import type ProjectCategoryModel from './models/ProjectCategoryModel'
import type ProjectModel from './models/ProjectModel'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const categoriesStore = useCategories()
const projectsStore = useProjects()
const allProjectsByCategoryStore = useAllProjectsByCategory()

CategoriesService.getCategories().then((res) => (categoriesStore.categories = res))

ProjectsService.getProjects().then((res: ProjectCategoryModel[]) => {
  res.forEach((category: ProjectCategoryModel) => {
    category.projects.forEach((project) => {
      const processedProjects: Map<string, ProjectModel> = new Map()
      processedProjects.set(project.projectName, project)
      projectsStore.projects = processedProjects
    })
  })

  allProjectsByCategoryStore.allProjectsByCategory = res
})
