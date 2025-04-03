import type { ProjectEntryType } from '@/models/ProjectEntryType'

/** Model representing an entry within each project page, to be used on the actual portfolio page as well as admin page. */
export default class ProjectContentModel {
  entryType: ProjectEntryType
  title: string
  imageUrls: string[]

  constructor(entryType: ProjectEntryType, title: string, imageUrls: string[]) {
    this.entryType = entryType
    this.title = title
    this.imageUrls = imageUrls
  }
}
