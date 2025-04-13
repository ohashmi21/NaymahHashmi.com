import UuidUtilities from '@/utilities/UuidUtilities'
import ProjectModel from './ProjectModel'

/** Object representing project category. */
export default class ProjectCategoryModel {
  uuid: string
  colorHash: string
  categoryName: string
  imgPath: string
  projects: ProjectModel[]

  constructor(
    colorHash: string,
    categoryName: string,
    imgPath: string,
    projects: ProjectModel[],
    uuid: string = UuidUtilities.getIdString(),
  ) {
    this.uuid = uuid
    this.colorHash = colorHash
    this.categoryName = categoryName
    this.imgPath = imgPath
    this.projects = projects
  }
}
