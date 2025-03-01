import ProjectCategoryModel from '@/models/ProjectCategoryModel'
import ProjectModel from '@/models/ProjectModel'

/** Temporary object representing mock data to render UI */
export default class MockData {
  static projects: ProjectCategoryModel[] = [
    new ProjectCategoryModel('#F5B4B6', 'Category 1', '', [
      new ProjectModel('Category 1 Project 1', ''),
      new ProjectModel('Category 1 Project 2', ''),
      new ProjectModel('Category 1 Project 3', ''),
      new ProjectModel('Category 1 Project 4', ''),
    ]),
    new ProjectCategoryModel('#D0B9F5', 'Category 2', '', [
      new ProjectModel('Category 2 Project 1', ''),
      new ProjectModel('Category 2 Project 2', ''),
    ]),
    new ProjectCategoryModel('#C4E7F5', 'Category 3', '', [
      new ProjectModel('Category 3 Project 1', ''),
      new ProjectModel('Category 3 Project 2', ''),
      new ProjectModel('Category 3 Project 3', ''),
    ]),
    new ProjectCategoryModel('#C5F5D3', 'Category 4', '', [
      new ProjectModel('Category 4 Project 1', ''),
      new ProjectModel('Category 4 Project 2', ''),
      new ProjectModel('Category 4 Project 3', ''),
      new ProjectModel('Category 4 Project 4', ''),
      new ProjectModel('Category 4 Project 5', ''),
      new ProjectModel('Category 4 Project 6', ''),
      new ProjectModel('Category 4 Project 7', ''),
    ]),
    new ProjectCategoryModel('#D7F5C1', 'Category 5', '', [
      new ProjectModel('Category 5 Project 1', ''),
      new ProjectModel('Category 5 Project 2', ''),
      new ProjectModel('Category 5 Project 3', ''),
      new ProjectModel('Category 5 Project 4', ''),
    ]),
  ]
}
