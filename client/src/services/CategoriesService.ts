import type ProjectCategoryModel from '@/models/ProjectCategoryModel'
import axios from 'axios'

export default class CategoriesService {
  static getCategories(): Promise<ProjectCategoryModel[]> {
    return axios.get('http://localhost:3333/project-categories').then((res) => {
      return res.data as ProjectCategoryModel[]
    })
  }
}
