class Product {
  constructor(name, price, discountedPrice) {
    this.name = name;
    this.price = price;
    this.discountedPrice = discountedPrice;
  }

  set setName(name) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }

  set setPrice(price) {
    this.price = price;
  }

  get getPrice() {
    return this.price;
  }

  set setDiscountedPrice(discountedPrice) {
    this.discountedPrice = discountedPrice;
  }

  get getDiscountedPrice() {
    return this.discountedPrice;
  }
}

module.exports = Product;
