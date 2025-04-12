import AzureUtilities from './AzureUtilities'

/** Helper class to handle image uploading. */
export default class ImageUploadHandler {
  // Uploads image to server and returns string representing file url
  static uploadImage(fileName: string, file: File): string {
    AzureUtilities.uploadToAzure(fileName, file)

    return URL.createObjectURL(file)
  }
}
