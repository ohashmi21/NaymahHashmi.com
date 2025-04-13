import UuidUtilities from '@/utilities/UuidUtilities'
import ProjectModel from './ProjectModel'

/** Object representing project category. */
export default class ProjectCategoryModel {
  id: string
  colorHash: string
  categoryName: string
  imgPath: string
  projects: ProjectModel[]

  constructor(
    colorHash: string,
    categoryName: string,
    imgPath: string,
    projects: ProjectModel[],
    id: string = UuidUtilities.getIdString(),
  ) {
    this.id = id
    this.colorHash = colorHash
    this.categoryName = categoryName
    this.imgPath = imgPath
    this.projects = projects
  }
}
