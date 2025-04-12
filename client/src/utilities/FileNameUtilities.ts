import { v1 as uuidv1 } from 'uuid'

/** Utilities class to handle file naming conventions. */
export default class FileNameUtilties {
  static generateBlobName(categoryName: string, projectName: string): string {
    return `${categoryName}_${projectName}_${uuidv1()}`
  }
}
