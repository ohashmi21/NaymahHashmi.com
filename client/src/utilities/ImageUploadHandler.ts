/** Helper class to handle image uploading. */
export default class ImageUploadHandler {
  // Uploads image to server and returns string representing file url
  static uploadImage(file: File): string {
    // TODO: Handle actual uploading to server
    return URL.createObjectURL(file)
  }
}
