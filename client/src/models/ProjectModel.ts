import ProjectContentModel from '@/models/ProjectContentModel'
import UuidUtilities from '@/utilities/UuidUtilities'

/** Object representing project. */
export default class ProjectModel {
  uuid: number
  projectBannerAzureFileName: string
  projectName: string
  projectTileImageAzureFileName: string
  projectContent: ProjectContentModel[]

  constructor(
    projectBannerAzureFileName: string,
    projectName: string,
    projectTileImageAzureFileName: string,
    projectContent: ProjectContentModel[],
  ) {
    this.uuid = UuidUtilities.getId()
    this.projectBannerAzureFileName = projectBannerAzureFileName
    this.projectName = projectName
    this.projectTileImageAzureFileName = projectTileImageAzureFileName
    this.projectContent = projectContent
  }
}
