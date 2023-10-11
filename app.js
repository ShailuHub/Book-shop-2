const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const { mongoConnection } = require("./util/database.js");
const { getDb } = require("./util/database.js");
const app = express();

// const Product = require("./models/product");
// const User = require("./models/user");
// const Cart = require("./models/cart");
// const ProductCart = require("./models/product-cart");

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
//app.use(shopRoutes);

app.use(errorController.get404);

mongoConnection(() => {
  app.listen(3000, () => {
    console.log("Server is working on the port 3000");
  });
});
