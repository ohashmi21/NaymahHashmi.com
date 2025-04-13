import { ObjectId } from "mongodb";
import ProjectModel from "./ProjectModel";

/** Object representing project category. */
export default class ProjectCategoryModel {
  uuid: string | null;
  colorHash: string;
  categoryName: string;
  imgPath: string;
  projects: ProjectModel[];

  constructor(
    uuid: string,
    categoryName: string,
    colorHash: string = "",
    imgPath: string = "",
    projects: ProjectModel[] = []
  ) {
    this.uuid = uuid;
    this.colorHash = colorHash;
    this.categoryName = categoryName;
    this.imgPath = imgPath;
    this.projects = projects;
  }
}
