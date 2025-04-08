import ProjectContentModel from '@/models/ProjectContentModel'
import UuidUtilities from '@/utilities/UuidUtilities'

/** Object representing project. */
export default class ProjectModel {
  uuid: number
  projectBannerImgUrl: string
  projectName: string
  projectTileImagePath: string
  projectContent: ProjectContentModel[]

  constructor(
    projectBannerImgUrl: string,
    projectName: string,
    projectTileImagePath: string,
    projectContent: ProjectContentModel[],
  ) {
    this.uuid = UuidUtilities.getId()
    this.projectBannerImgUrl = projectBannerImgUrl
    this.projectName = projectName
    this.projectTileImagePath = projectTileImagePath
    this.projectContent = projectContent
  }
}
