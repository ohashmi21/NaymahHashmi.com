import { ProjectCategoryModel } from "@/models/ProjectCategory";

export class ProjectCategoryProvider {
  public static get PROJECT_CATEGORIES(): ProjectCategoryModel[] {
    return [
      new ProjectCategoryModel(
        "INTERIOR",
        "rgb(236,137,143)"
      ),
      new ProjectCategoryModel(
        "RESIDENTIAL",
        "rgb(238,181,157)"
      ),
      new ProjectCategoryModel(
        "INSTITUTIONAL",
        "rgb(172,180,141)"
      ),
      new ProjectCategoryModel(
        "COMMERCIAL",
        "rgb(153,195,191)"
      ),
      new ProjectCategoryModel( "URBAN", "rgb(188,150,159)"),
    ];
  }
}
