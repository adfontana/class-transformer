import { Expose, Type } from "class-transformer";

interface IPhoto {
  type: string;
  url: string;
}

class Category {
  @Expose() id: string;
  @Expose() name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class User {

  // ---------------------------------------------------------------------------------------
  // Public properties
  // ---------------------------------------------------------------------------------------

  @Expose() id: number;
  @Expose() firstName: string;
  @Expose() lastName: string;
  @Expose() age: number;
  @Expose() photo?: IPhoto;

  // ---------------------------------------------------------------------------------------
  // Private properties
  // ---------------------------------------------------------------------------------------

  @Expose({ name: 'category' })
  @Type(() => Category)
  private _category?: Category;

  // ---------------------------------------------------------------------------------------
  // Contructor
  // ---------------------------------------------------------------------------------------

  constructor() {
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.age = 0;
  }

  // ---------------------------------------------------------------------------------------
  // Accessors
  // ---------------------------------------------------------------------------------------

  get category(): Category {
    if (!this._category) {
      this._category = new Category('1', 'category');
    }
    return this._category;
  }

  // ---------------------------------------------------------------------------------------
  // Public methods
  // ---------------------------------------------------------------------------------------

  getName() {
    return this.firstName + ' ' + this.lastName;
  }

  isAdult() {
    return this.age > 36 && this.age < 60;
  }
}
