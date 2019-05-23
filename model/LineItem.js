class LineItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  set setQuantity(quantity) {
    this.quantity = quantity;
  }

  get getQuantity() {
    return this.quantity;
  }

  get getProduct() {
    return this.product;
  }
}

module.exports = LineItem;
