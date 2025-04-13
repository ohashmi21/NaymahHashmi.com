import { ObjectId } from "mongodb";
import ProjectContentModel from "./ProjectContentModel";

/** Object representing project. */
export default class ProjectModel {
  uuid: ObjectId | null;
  projectBannerAzureFileName: string;
  projectName: string;
  projectTileImageAzureFileName: string;
  projectContent: ProjectContentModel[];

  constructor(
    projectBannerAzureFileName: string,
    projectName: string,
    projectTileImageAzureFileName: string,
    projectContent: ProjectContentModel[],
    uuid: ObjectId | null = null
  ) {
    this.uuid = uuid;
    this.projectBannerAzureFileName = projectBannerAzureFileName;
    this.projectName = projectName;
    this.projectTileImageAzureFileName = projectTileImageAzureFileName;
    this.projectContent = projectContent;
  }
}
