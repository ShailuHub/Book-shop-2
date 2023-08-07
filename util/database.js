require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "book_shop",
  process.env.DB_Username,
  process.env.DB_Password,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
