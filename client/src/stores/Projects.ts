import ProjectCategoryModel from '@/models/ProjectCategoryModel'
import ProjectModel from '@/models/ProjectModel'
import { defineStore } from 'pinia'

export const useProjects = defineStore('projects', () => {
  const projects = new Map<string, ProjectModel>()

  return { projects }
})

export const useCategories = defineStore('categories', () => {
  const categories: ProjectCategoryModel[] = []

  return { categories }
})

export const useAllProjectsByCategory = defineStore('allProjectsByCategory', () => {
  const allProjectsByCategory: ProjectCategoryModel[] = []

  return { allProjectsByCategory }
})
