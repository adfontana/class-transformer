export class User {
    
    id: number;
    firstName: string;
    lastName: string;
    age: number;

    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
    }
  
    getName() {
      return this.firstName + ' ' + this.lastName;
    }
  
    isAdult() {
      return this.age > 36 && this.age < 60;
    }
  }