class Father {
  num1 = 20;
  num2 = 30;
  addTwoNumber() {
    let sum = this.num1 + this.num2;
    console.log(sum);
  }
}

class Son extends Father {}

const fatherOBJ = new Father();
console.log(fatherOBJ);

const SonObj = new Son();
//console.log(SonObj);
//SonObj.addTwoNumber();
