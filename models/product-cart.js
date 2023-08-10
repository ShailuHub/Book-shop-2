const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const ProductCart = sequelize.define("productCart", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  quantity: Sequelize.INTEGER,
});

module.exports = ProductCart;
