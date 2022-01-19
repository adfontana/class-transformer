import { Expose, Type } from "class-transformer";

class Category {
  @Expose() id: string;
  @Expose() name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class User {

  @Expose({ name: 'category' })
  @Type(() => Category)
  private _category?: Category;

  @Expose() id: number;
  @Expose() firstName: string;
  @Expose() lastName: string;
  @Expose() age: number;


  constructor() {
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.age = 0;
  }

  get category(): Category {
    if (!this._category) {
      this._category = new Category('1', 'category');
    }
    return this._category;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }

  isAdult() {
    return this.age > 36 && this.age < 60;
  }
}