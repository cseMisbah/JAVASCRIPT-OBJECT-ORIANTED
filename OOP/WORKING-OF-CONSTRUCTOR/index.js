// How constructor basically works and creates

class Person {
  //constructor executes automatically when object is created
  //constructor can take parameter
  //constructor method cannot return any result
  //constructor name should be constructor
  constructor() {
    console.log(`I am a constructor Method`);
  }
}

let personOBJ = new Person();
