import ProjectContentModel from '@/models/ProjectContentModel'

/** Object representing project. */
export default class ProjectModel {
  projectName: string
  projectTileImagePath: string
  projectContent: ProjectContentModel[]

  constructor(
    projectName: string,
    projectTileImagePath: string,
    projectContent: ProjectContentModel[],
  ) {
    this.projectName = projectName
    this.projectTileImagePath = projectTileImagePath
    this.projectContent = projectContent
  }
}
