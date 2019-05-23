var Product = require("./Product");
var LineItem = require("./LineItem");

class Cart {
  constructor() {
    this.shoppingCart = [];
  }

  addProduct(name, price, discountedPrice, quantity) {
    let newProduct = new Product(name, price, discountedPrice);
    let lineItem = new LineItem(newProduct, quantity);
    let cart = [];

    cart.push(newProduct);
    cart.push(lineItem);
    this.shoppingCart.push(cart);
    // console.log("shoppingCart:::", this.shoppingCart);
  }

  totalPrice() {
    console.log("Shopping cart is:", this.shoppingCart);
    let cart = [];
    this.shoppingCart.map(x => cart.push(x[0].price));
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return cart.reduce(reducer);
  }

  totalDiscountedPrice() {
    console.log("Shopping cart is:", this.shoppingCart);
    let cart = [];
    this.shoppingCart.map(x => cart.push(x[0].discountedPrice));
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return cart.reduce(reducer);
  }

  getCart() {
    return this.shoppingCart;
  }
}

module.exports = Cart;
