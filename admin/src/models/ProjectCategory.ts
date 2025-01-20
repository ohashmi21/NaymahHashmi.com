export class ProjectCategoryModel {

    private _name: string;
    private _color: string;
  
    constructor(name: string, color: string) {
      this._name = name;
      this._color = color;
    }
    public get name() {
      return this._name;
    }
    public get color() {
      return this._color;
    }
  }
  