class person {
  first_name = "Rabbil";
  last_name = "Hasan";
  age = 34;
  city = "Dhaka";
  isBangladeshi = true;
  getName() {
    return `My name is ${this.first_name}  ${this.last_name}`;
  }
}
let personOBJ = new person();
console.log(personOBJ.first_name);
