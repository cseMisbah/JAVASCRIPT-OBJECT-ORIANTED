//Method overloading
//when we keep same name methods in a same class as
// same name of method then that is called method overloading

/*
-OOP like Java,c++   - allows method overloading
- But in javascript does not support directly the oveloading
- But by examining the parameters of a method we can achieve 
- the concept of method overloading in javascript
*/

class MyClass {
  myMethod(p1, p2, p3) {
    if (arguments.length === 1) {
      console.log("Recieved one argument", p1);
    } else if (arguments.length === 2) {
      console.log("Recieved two arguments", p1, p2);
    } else if (arguments.length === 3) {
      console.log("Recieved three arguments", p1, p2, p3);
    }
  }
}

let OBJ = new MyClass();
OBJ.myMethod(1);
OBJ.myMethod(1, 2);
OBJ.myMethod(1, 2, 3);
/*
class MyClass {
   myMethod(p1,p2){
      
   } 

   myMethod(p1,p2,p3){
   }
}
*/
