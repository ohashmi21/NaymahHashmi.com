import * as CryptoJS from 'crypto-js'
import AzureConnectionInfo from './AzureConnectionInfo'
import {
  BlockBlobClient,
  BlobServiceClient,
  AnonymousCredential,
  newPipeline,
} from '@azure/storage-blob'

/** Utilities class ot handle connection connection and interaction with Azure. */
export default class AzureUtilities {
  /** Implementation was taken from https://stackoverflow.com/a/61318262/5731511 */
  private static getSasToken() {
    const end = new Date(new Date().getTime() + 30 * 60 * 1000)
    const signedpermissions = 'rwdlac'
    const signedservice = 'b'
    const signedresourcetype = 'sco'
    const signedexpiry = end.toISOString().substring(0, end.toISOString().lastIndexOf('.')) + 'Z'
    const signedProtocol = 'https'
    const signedversion = '2018-03-28'

    const StringToSign =
      AzureConnectionInfo.accountName +
      '\n' +
      signedpermissions +
      '\n' +
      signedservice +
      '\n' +
      signedresourcetype +
      '\n' +
      '\n' +
      signedexpiry +
      '\n' +
      '\n' +
      signedProtocol +
      '\n' +
      signedversion +
      '\n'

    const str = CryptoJS.HmacSHA256(
      StringToSign,
      CryptoJS.enc.Base64.parse(AzureConnectionInfo.sasKey),
    )
    const sig = CryptoJS.enc.Base64.stringify(str)

    return `sv=${signedversion}&ss=${signedservice}&srt=${signedresourcetype}&sp=${signedpermissions}&se=${encodeURIComponent(signedexpiry)}&spr=${signedProtocol}&sig=${encodeURIComponent(sig)}`
  }

  private static getBlockBlobClient(blobName: string) {
    return new BlockBlobClient(
      `https://${AzureConnectionInfo.accountName}.blob.core.windows.net/${AzureConnectionInfo.containerName}/${blobName}?${this.getSasToken()}`,
    )
  }

  /**
   * Uploads file to Azure.
   *
   * @returns URL of blob in Azure
   */
  static async uploadToAzure(blobName: string, file: File): Promise<string> {
    const client = this.getBlockBlobClient(blobName)

    return client.uploadData(file as Blob).then(async () => {
      return client.url
    })
  }

  static async retrieveBlobFromAzureByFileName(fileName: string): Promise<Blob | undefined> {
    const downloadResponse = await this.getBlockBlobClient(fileName).download()
    return await downloadResponse.blobBody
  }
}
