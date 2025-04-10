import { ObjectId } from "mongodb";
import ProjectModel from "./ProjectModel";

/** Object representing project category. */
export default class ProjectCategoryModel {
  uuid: ObjectId | null;
  colorHash: string;
  categoryName: string;
  imgPath: string;
  projects: ProjectModel[];

  constructor(
    colorHash: string,
    categoryName: string,
    imgPath: string,
    projects: ProjectModel[],
    uuid: ObjectId | null = null
  ) {
    this.uuid = uuid;
    this.colorHash = colorHash;
    this.categoryName = categoryName;
    this.imgPath = imgPath;
    this.projects = projects;
  }
}
