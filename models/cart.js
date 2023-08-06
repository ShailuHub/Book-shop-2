const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    //fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      //Analyse the cart ==> find existing product
      //Add new product ==> increase quantity
      const existingProductIndex = cart.products.findIndex((item) => {
        item.id === id;
      });
      const existingProduct = cart.products[existingProductIndex];
      let updtedProduct;
      if (existingProduct) {
        updtedProduct = { ...existingProduct };
        updtedProduct.qty++;
        //cart.products = [...cart.products];
        cart.products[existingProductIndex] = updtedProduct;
      } else {
        updtedProduct = { id: id, qty: 1 };
        //cart.products = [...cart.products, updtedProduct];
        cart.push(updtedProduct);
      }
      cart.totalPrice += productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
