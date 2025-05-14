//What is object
//How to create object using object literal
let person = {
  first_name: "Misbah",
  last_name: "Sakib",
  age: 27,
  city: "Chattogram",
  isBangladeshi: true,
  getName: () => {
    return `My fullname is ${person.first_name} ${person.last_name}`;
  },
};
console.log(person.getName());
console.log(person.isBangladeshi);
