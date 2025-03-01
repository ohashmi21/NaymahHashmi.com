/** Object representing project category. */
export default class ProjectCategoryModel {
  colorHash: string
  categoryName: string
  imgPath: string

  constructor(colorHash: string, categoryName: string, imgPath: string) {
    this.colorHash = colorHash
    this.categoryName = categoryName
    this.imgPath = imgPath
  }
}
