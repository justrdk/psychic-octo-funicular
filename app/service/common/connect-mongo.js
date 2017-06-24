const dbUrl = require('./db-config').url;
const MongoClient = require('mongodb').MongoClient;
const Promise = require('bluebird');

const connectMongoDb = () => new Promise((resolve, reject) => {
  MongoClient.connect(dbUrl, (err, db) => {
    if (err) {
      return reject(err);
    }
    resolve(db);
  });
})

module.exports = {
  connectMongoDb
};
