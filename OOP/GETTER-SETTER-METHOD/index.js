class Product {
  set setPrice(value) {
    this.price = value;
  }

  get getPrice() {
    return this.price;
  }
}

const ProductOBJ = new Product();
ProductOBJ.setPrice = 1000;
console.log(ProductOBJ);
