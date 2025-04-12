import AzureUtilities from './AzureUtilities'

/** Helper class to handle image uploading. */
export default class ImageUploadHandler {
  // Uploads image to server and returns string representing file url
  static async uploadImage(fileName: string, file: File): Promise<string> {
    return AzureUtilities.uploadToAzure(fileName, file).then((uploadedFileUrl) => {
      return uploadedFileUrl
    })
  }
}
