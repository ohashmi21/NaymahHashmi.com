import AzureUtilities from './AzureUtilities'

/** Helper class to handle image uploading. */
export default class ImageUploadHandler {
  // Uploads image to server and returns string representing file url
  static uploadImage(file: File): string {
    AzureUtilities.uploadToAzure(file)

    // TODO: Handle actual uploading to server
    return URL.createObjectURL(file)
  }
}
