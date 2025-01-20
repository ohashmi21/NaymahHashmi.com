import { Components } from "./Component";

export class Project {
    id?: string;
    title!: string;
    type!: string;
    header!: string;
    description!: string;
    layout: Components[] = [];
  
    constructor(
      id: string | undefined,
      title: string,
      type: string,
      header: string,
      description: string,
      layout: Components[]
    ) {
      this.id = id;
      this.title = title;
      this.type = type;
      this.header = header;
      this.description = description;
      this.layout = layout;
    }
}