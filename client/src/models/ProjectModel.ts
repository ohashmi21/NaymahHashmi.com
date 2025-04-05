import ProjectContentModel from '@/models/ProjectContentModel'
import UuidUtilities from '@/utilities/UuidUtilities'

/** Object representing project. */
export default class ProjectModel {
  uuid: number
  projectName: string
  projectTileImagePath: string
  projectContent: ProjectContentModel[]

  constructor(
    projectName: string,
    projectTileImagePath: string,
    projectContent: ProjectContentModel[],
  ) {
    this.uuid = UuidUtilities.getId()
    this.projectName = projectName
    this.projectTileImagePath = projectTileImagePath
    this.projectContent = projectContent
  }
}
