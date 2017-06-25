const Promise = require('bluebird')
const mongoService = require('../common/connect-mongo')
const orderHelper = require('./order-helper')

const getOrdersByCompany = Promise.coroutine(function* getOrdersByCompany(company) {
  let db
  try {
    db = yield mongoService.connectMongoDb()
    const orders = yield orderHelper.getOrdersByCompany(db, company)
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
    const orders = yield orderHelper.getOrdersByAddress(db, address)
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
    const deleted = yield orderHelper.removeOrderById(db, orderId)
    return Promise.resolve(deleted)
  } catch (err) {
    return Promise.reject(err)
  } finally {
    if (db) {
      db.close()
    }
  }
});

const getOrdersCount = Promise.coroutine(function* getOrdersCount() {
  let db
  try {
    db = yield mongoService.connectMongoDb()
    const orders = yield orderHelper.getOrdersCount(db)
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
  getOrdersByCompany,
  getOrdersByAddress,
  removeOrdersByOrderId,
  getOrdersCount
}
