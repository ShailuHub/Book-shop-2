const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnection = (callback) => {
  MongoClient.connect(
    `mongodb://${process.env.DB_Username}:${process.env.DB_Password}@ac-lrblyvk-shard-00-00.qtu98rs.mongodb.net:27017,ac-lrblyvk-shard-00-01.qtu98rs.mongodb.net:27017,ac-lrblyvk-shard-00-02.qtu98rs.mongodb.net:27017/?ssl=true&replicaSet=atlas-e2qtgc-shard-0&authSource=admin&retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("connected");
      _db = client.db();
      callback();
    })
    .catch((err) => console.log(err));
};

const getDb = () => {
  if (_db) return _db;
  throw err;
};

exports.mongoConnection = mongoConnection;
exports.getDb = getDb;
