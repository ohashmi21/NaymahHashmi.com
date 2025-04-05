import ProjectCategoryModel from '@/models/ProjectCategoryModel'
import ProjectContentModel from '@/models/ProjectContentModel'
import { ProjectEntryType } from '@/models/ProjectEntryType'
import ProjectModel from '@/models/ProjectModel'

/** Temporary object representing mock data to render UI */
export default class MockData {
  static mockImageUrl = 'https://static.thenounproject.com/png/526867-200.png'

  static projectContent = [
    new ProjectContentModel(ProjectEntryType.IMAGE_ROW, 'Image Row title 1', [
      MockData.mockImageUrl,
      MockData.mockImageUrl,
      MockData.mockImageUrl,
    ]),
    new ProjectContentModel(ProjectEntryType.SINGLE_IMAGE, 'Single Image 1', [
      MockData.mockImageUrl,
    ]),
    new ProjectContentModel(ProjectEntryType.IMAGE_ROW, 'Image Row title 2', [
      MockData.mockImageUrl,
      MockData.mockImageUrl,
    ]),
    new ProjectContentModel(ProjectEntryType.IMAGE_ROW, 'Image Row title 3', [
      MockData.mockImageUrl,
      MockData.mockImageUrl,
      MockData.mockImageUrl,
      MockData.mockImageUrl,
    ]),
    new ProjectContentModel(ProjectEntryType.LONG_IMAGE, 'Long Row title', [MockData.mockImageUrl]),
    new ProjectContentModel(ProjectEntryType.SINGLE_IMAGE, 'Single Image 2', [
      MockData.mockImageUrl,
    ]),
  ]

  static projects: ProjectCategoryModel[] = [
    new ProjectCategoryModel('#F5B4B6', 'Category 1', '', [
      new ProjectModel('Category 1 Project 1', '', MockData.projectContent),
      new ProjectModel('Category 1 Project 2', '', MockData.projectContent),
      new ProjectModel('Category 1 Project 3', '', MockData.projectContent),
      new ProjectModel('Category 1 Project 4', '', MockData.projectContent),
    ]),
    new ProjectCategoryModel('#D0B9F5', 'Category 2', '', [
      new ProjectModel('Category 2 Project 1', '', MockData.projectContent),
      new ProjectModel('Category 2 Project 2', '', MockData.projectContent),
    ]),
    new ProjectCategoryModel('#C4E7F5', 'Category 3', '', [
      new ProjectModel('Category 3 Project 1', '', MockData.projectContent),
      new ProjectModel('Category 3 Project 2', '', MockData.projectContent),
      new ProjectModel('Category 3 Project 3', '', MockData.projectContent),
    ]),
    new ProjectCategoryModel('#C5F5D3', 'Category 4', '', [
      new ProjectModel('Category 4 Project 1', '', MockData.projectContent),
      new ProjectModel('Category 4 Project 2', '', MockData.projectContent),
      new ProjectModel('Category 4 Project 3', '', MockData.projectContent),
      new ProjectModel('Category 4 Project 4', '', MockData.projectContent),
      new ProjectModel('Category 4 Project 5', '', MockData.projectContent),
      new ProjectModel('Category 4 Project 6', '', MockData.projectContent),
      new ProjectModel('Category 4 Project 7', '', MockData.projectContent),
    ]),
    new ProjectCategoryModel('#D7F5C1', 'Category 5', '', [
      new ProjectModel('Category 5 Project 1', '', MockData.projectContent),
      new ProjectModel('Category 5 Project 2', '', MockData.projectContent),
      new ProjectModel('Category 5 Project 3', '', MockData.projectContent),
      new ProjectModel('Category 5 Project 4', '', MockData.projectContent),
    ]),
  ]
}
