//create instance
// to create instance we can use new keword or we can skip to use new keword
let person = Object();

person.first_name = "Misbah";
person.last_name = "Sakib";
person.age = 27;
person.city = "Chattogram";
person.isBangladeshi = true;
person.getName = () => {
  return `My name is ${person.first_name} ${person.last_name}`;
};
console.log(person.first_name);
