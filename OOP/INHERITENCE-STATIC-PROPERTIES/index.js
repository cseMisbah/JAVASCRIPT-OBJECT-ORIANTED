// by using static keyword - from inside the class we can use the property very easily
//whereas we don't need to create any kind of object

class Father {
  static greetParent() {
    console.log("Hello ..! am a father.");
  }
}

class Son extends Father {
  static greetChild() {
    console.log("I am a son");
  }
}
//console.log(Son.greetParent());
//console.log(Father.greetParent());
console.log(Son.greetChild());
