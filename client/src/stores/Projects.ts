import MockData from '@/assets/mockdata'
import ProjectModel from '@/models/ProjectModel'
import { defineStore } from 'pinia'

export const useProjects = defineStore('projects', () => {
  const projects = new Map<string, ProjectModel>()

  MockData.projects.forEach((projectCategory) => {
    projectCategory.projects.forEach((project) => projects.set(project.projectName, project))
  })

  return { projects }
})
