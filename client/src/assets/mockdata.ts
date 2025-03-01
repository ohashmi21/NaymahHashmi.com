import ProjectCategoryModel from '@/models/ProjectCategoryModel'

/** Temporary object representing mock data to render UI */
export default class MockData {
  static projects: ProjectCategoryModel[] = [
    new ProjectCategoryModel('#F5B4B6', 'Category 1', ''),
    new ProjectCategoryModel('#D0B9F5', 'Category 2', ''),
    new ProjectCategoryModel('#C4E7F5', 'Category 3', ''),
    new ProjectCategoryModel('#C5F5D3', 'Category 4', ''),
    new ProjectCategoryModel('#D7F5C1', 'Category 5', ''),
  ]
}
