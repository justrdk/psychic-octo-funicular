const Promise = require('bluebird')
const mongoService = require('../common/connect-mongo')
const companyHelper = require('./order-helper')

const getOrdersByCompany = Promise.coroutine(function* getOrdersByCompany(company) {
  let db
  try {
    db = yield mongoService.connectMongoDb()
    const orders = yield companyHelper.getOrdersByCompany(db, company)
    return Promise.resolve(orders)
  } catch (err) {
    return Promise.reject(err)
  } finally {
    if (db) {
      db.close()
    }
  }
});

const getOrdersByAddress = Promise.coroutine(function* getOrdersByCompany(address) {
  let db
  try {
    db = yield mongoService.connectMongoDb()
    const orders = yield companyHelper.getOrdersByCompany(db, address)
    return Promise.resolve(orders)
  } catch (err) {
    return Promise.reject(err)
  } finally {
    if (db) {
      db.close()
    }
  }
});

const removeOrdersByOrderId = Promise.coroutine(function* getOrdersByCompany(orderId) {
  let db
  try {
    db = yield mongoService.connectMongoDb()
    const orders = yield companyHelper.getOrdersByCompany(db, orderId)
    return Promise.resolve(orders)
  } catch (err) {
    return Promise.reject(err)
  } finally {
    if (db) {
      db.close()
    }
  }
});

module.exports = {
  getOrdersByCompany
}
