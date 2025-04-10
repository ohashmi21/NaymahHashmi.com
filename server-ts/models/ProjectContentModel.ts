import { ObjectId } from "mongodb";
import { ProjectEntryType } from "./ProjectEntryType";

/** Model representing an entry within each project page, to be used on the actual portfolio page as well as admin page. */
export default class ProjectContentModel {
  uuid: ObjectId | null;
  entryType: ProjectEntryType;
  title: string;
  imageUrls: string[];

  constructor(
    entryType: ProjectEntryType,
    title: string,
    imageUrls: string[],
    uuid: ObjectId | null = null
  ) {
    this.uuid = uuid;
    this.entryType = entryType;
    this.title = title;
    this.imageUrls = imageUrls;
  }
}
