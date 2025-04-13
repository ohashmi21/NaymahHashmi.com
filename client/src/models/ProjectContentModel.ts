import type { ProjectEntryType } from '@/models/ProjectEntryType'
import UuidUtilities from '@/utilities/UuidUtilities'

/** Model representing an entry within each project page, to be used on the actual portfolio page as well as admin page. */
export default class ProjectContentModel {
  uuid: number
  entryType: ProjectEntryType
  title: string
  azureFileName: string[]

  constructor(entryType: ProjectEntryType, title: string, azureFileName: string[]) {
    this.uuid = UuidUtilities.getId()
    this.entryType = entryType
    this.title = title
    this.azureFileName = azureFileName
  }
}
