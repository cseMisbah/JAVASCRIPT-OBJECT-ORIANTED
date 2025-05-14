//Re-declaring - doing duplicate
// a class can be declared once only if you try to redeclare class it will throw
//an error for sure

//to redeclare a class is by using a class expression

let person = class Person {
  num1 = 100;
  num2 = 20;
  addTwo() {
    return this.num1 + this.num2;
  }
};

let person = class Person {
  num1 = 10;
  num2 = 20;
  addTwo() {
    return this.num1 + this.num2;
  }
};

const personOBJ = new Object();
console.log(personOBJ.num1);

/*
class Person {
  num1 = 100;
  num2 = 20;
  addTwo() {
    return this.num1 + this.num2;
  }
}
class Person {
  num1 = 10;
  num2 = 20;
  addTwo() {
    return this.num1 + this.num2;
  }
}
let personOBJ = new Object();
console.log(personOBJ.num1);

*/
