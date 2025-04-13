import type ProjectCategoryModel from '@/models/ProjectCategoryModel'
import ProjectModel from '@/models/ProjectModel'
import axios from 'axios'

/** Service class to handle interactions with server related to projects */
export default class ProjectsService {
  static uploadProject(categoryId: string, project: ProjectModel) {
    axios.post('http://localhost:3333/project', {
      projectCategory: categoryId,
      projectModel: project,
    })
  }

  static getProjects(): Promise<ProjectCategoryModel[]> {
    return axios.get('http://localhost:3333/all-projects').then((res) => {
      return res.data as ProjectCategoryModel[]
    })
  }
}
