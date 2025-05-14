//what is abstraction

//abstraction means having no instance or no existence
// however, abstraction keyword is used for not creating object with the class which
//class have used abstraction object

/*
 some programming languages like - java,python,c++ has abstraction keyword
 (if we use abstraction keyword with a class in which class we have use
 abstraction keyword , for this class we cannot create object because of abstraction) 
 but javascript has no abstract keyword in built that's why this language does not 
 support abstraction
*/
class Father {}

class Son extends Father {}

let OBJ1 = new Father();
let OBJ2 = new Son();
