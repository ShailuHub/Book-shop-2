const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, price, imageUrl, description);
  product
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) return res.redirect("/");
//   const productId = req.params.productId;
//   req.user
//     .getProducts({ where: { id: productId } })
//     //Product.findAll({ where: { id: productId } })
//     .then((product) => {
//       res.render("admin/edit-product", {
//         pageTitle: "Edit Product",
//         path: "/admin/edit-product",
//         editing: editMode,
//         product: product[0],
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// exports.postEditProduct = (req, res, next) => {
//   const productId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;
//   req.user
//     .getProducts({ where: { id: productId } })
//     //Product.findAll({ where: { id: productId } })
//     .then((product) => {
//       product[0].title = updatedTitle;
//       product[0].imageUrl = updatedImageUrl;
//       product[0].price = updatedPrice;
//       product[0].description = updatedDesc;
//       product[0].title = updatedTitle;
//       return product[0].save();
//     })
//     .then((result) => {
//       res.redirect("/admin/products");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// exports.getProducts = (req, res, next) => {
//   Product.findAll()
//     .then((products) => {
//       res.render("admin/products", {
//         prods: products,
//         pageTitle: "Admin Products",
//         path: "/admin/products",
//       });
//     })
//     .catch((err) => console.log(err));
// };

// exports.postDeleteProduct = (req, res, next) => {
//   const productId = req.body.productId;
//   Product.findOne({ where: { id: productId } })
//     .then((product) => {
//       console.log(product);
//       return product.destroy();
//     })
//     .then(() => {
//       res.redirect("/admin//products");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
