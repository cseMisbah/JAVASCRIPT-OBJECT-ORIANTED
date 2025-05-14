//Method overriding
class Father {
  addTwoNumbers() {
    let num1 = 40;
    let num2 = 50;
    console.log(num1 + num2);
  }
}

class Son extends Father {
  addTwoNumbers() {
    let num1 = 400;
    let num2 = 500;
    console.log(num1 + num2);
  }
}

let FatherOBJ = new Father();
console.log(FatherOBJ.addTwoNumbers());

let SonOBJ = new Son();
console.log(SonOBJ.addTwoNumbers());
