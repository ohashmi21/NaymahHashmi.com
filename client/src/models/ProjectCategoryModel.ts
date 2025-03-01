import ProjectModel from './ProjectModel'

/** Object representing project category. */
export default class ProjectCategoryModel {
  colorHash: string
  categoryName: string
  imgPath: string
  projects: ProjectModel[]

  constructor(colorHash: string, categoryName: string, imgPath: string, projects: ProjectModel[]) {
    this.colorHash = colorHash
    this.categoryName = categoryName
    this.imgPath = imgPath
    this.projects = projects
  }
}
