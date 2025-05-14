//change properties of constructor

class Person {
  num1 = 10;
  num2 = 20;

  constructor(a, b) {
    this.num1 = a;
    this.num2 = b;
  }

  addTwoNumber() {
    return this.num1 + this.num2;
  }
}

let personOBJ = new Person(400, 500);
console.log(personOBJ.addTwoNumber());
