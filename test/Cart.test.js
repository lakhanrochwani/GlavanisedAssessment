const Cart = require("../model/Cart.js");
const Product = require("../model/Product.js");
const expect = require("chai").expect;

describe("Cart", () => {
  it("should initialize as empty", () => {
    const cart = new Cart();
    console.log("our cart", cart);
    expect(cart.getCart()).to.deep.equal([]);
    // expect(cart.totalPrice).to.be.equal(0)
  });

  it("should have length of 1", () => {
    const cart = new Cart();
    cart.addProduct("Shoes", 20, 18.78, 2);
    expect(cart.getCart()).to.have.lengthOf(1);
  });

  it("should have length of 2", () => {
    const cart = new Cart();
    cart.addProduct("Shoes", 20, 18.78, 2);
    cart.addProduct("Socks", 20, 18.78, 2);
    expect(cart.getCart()).to.have.lengthOf(2);
  });

  it("should get the total un-discounted price", () => {
    const cart = new Cart();

    cart.addProduct("Shoes", 20, 18.78, 2);
    cart.addProduct("Socks", 21, 18.78, 2);
    // console.log("Cart:", cart);
    expect(cart.totalPrice()).to.equal(41);
  });

  it("should get the total discounted  price", () => {
    const cart = new Cart();

    cart.addProduct("Shoes", 20, 18.78, 2);
    cart.addProduct("Socks", 21, 15.67, 2);
    // console.log("Cart:", cart);
    expect(cart.totalDiscountedPrice()).to.equal(34.45);
  });
});
