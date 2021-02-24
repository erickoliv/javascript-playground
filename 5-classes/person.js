class Person {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastLame = lastName;
  }

  get age(){
    return `${this.firstName} ${this.lastLame}`;
  }
}