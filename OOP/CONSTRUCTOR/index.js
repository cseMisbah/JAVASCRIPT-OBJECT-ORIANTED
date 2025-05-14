//constructor
//When using function and taking this function name if we create object that is constructor

function person() {
  this.first_name = "Misbah";
  this.last_name = "Sakib";
  this.age = 27;
  this.city = "Chottogram";
  this.isBangladeshi = true;
  this.getName = () => {
    return `My fullname is ${this.first_name} ${this.last_name}`;
  };
}
let personInstance = new person();
console.log(personInstance);
console.log(personInstance.city);
console.log(personInstance.getName());
