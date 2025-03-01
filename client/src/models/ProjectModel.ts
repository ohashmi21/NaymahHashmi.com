/** Object representing project. */
export default class ProjectModel {
  projectName: string
  projectTileImagePath: string

  constructor(projectName: string, projectTileImagePath: string) {
    this.projectName = projectName
    this.projectTileImagePath = projectTileImagePath
  }
}
