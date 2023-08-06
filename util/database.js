require("dotenv").config();

const sql = require("mysql2");

const pool = sql.createPool({
  user: process.env.DB_Username,
  password: process.env.DB_Password,
  host: "localhost",
  database: "book_shop",
});

module.exports = pool.promise();
