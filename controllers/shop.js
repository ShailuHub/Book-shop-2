const Product = require("../models/product");
//const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then((product) => {
    res.render("shop/product-list", {
      prods: product,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.fetchAll()
    .then((product) => {
      res.render("shop/product-detail", {
        product: product[0],
        pageTitle: product[0].title,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
  Product.findById(productId)
    .then((product) => {
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product.title,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

// exports.postCart = (req, res, next) => {
//   const productId = req.body.productId;
//   let fetchCart;
//   req.user
//     .getCart()
//     .then((cart) => {
//       fetchCart = cart;
//       return cart.getProducts({ where: { id: productId } });
//     })
//     .then((products) => {
//       let product;
//       if (products.length > 0) {
//         product = products[0];
//       }
//       let newQuantity = 1;
//       if (product) {
//         return Product.findOne({ where: { id: productId } })
//           .then((product) => {
//             return fetchCart
//               .addProduct(product, {
//                 through: { quantity: newQuantity + 1 },
//               })
//               .then(() => {
//                 res.render("shop/cart", {
//                   path: "/cart",
//                   pageTitle: "Your Cart",
//                   products: products,
//                 });
//               })
//               .catch((err) => {
//                 console.log(err);
//               });
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//       return Product.findOne({ where: { id: productId } })
//         .then((product) => {
//           return fetchCart
//             .addProduct(product, {
//               through: { quantity: newQuantity },
//             })
//             .then(() =>
//               res.render("shop/cart", {
//                 path: "/cart",
//                 pageTitle: "Your Cart",
//                 products: products,
//               })
//             )
//             .catch((err) => {
//               console.log(err);
//             });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then((product) => {
      res.render("shop/index", {
        prods: product,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

// exports.getCart = (req, res, next) => {
//   console.log("Hello");
//   console.log(req.user);
//   req.user
//     .getCart()
//     .then((cart) => {
//       return cart
//         .getProducts()
//         .then((products) => {
//           res.render("shop/cart", {
//             path: "/cart",
//             pageTitle: "Your Cart",
//             products: products,
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => console.log(err));
// };

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
