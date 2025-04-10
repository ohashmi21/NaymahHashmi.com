import { ObjectId } from "mongodb";
import ProjectContentModel from "./ProjectContentModel";

/** Object representing project. */
export default class ProjectModel {
  uuid: ObjectId | null;
  projectBannerImgUrl: string;
  projectName: string;
  projectTileImagePath: string;
  projectContent: ProjectContentModel[];

  constructor(
    projectBannerImgUrl: string,
    projectName: string,
    projectTileImagePath: string,
    projectContent: ProjectContentModel[],
    uuid: ObjectId | null = null
  ) {
    this.uuid = uuid;
    this.projectBannerImgUrl = projectBannerImgUrl;
    this.projectName = projectName;
    this.projectTileImagePath = projectTileImagePath;
    this.projectContent = projectContent;
  }
}
