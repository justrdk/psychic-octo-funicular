const Promise = require('bluebird')
const orderCollection = 'orders'

const getOrdersByCompany = (db, companyName) => new Promise((resolve, reject) => {
  db.collection(orderCollection).find({companyName}).toArray((err, orders) => {
    if (err) {
      return reject(err)
    }
    return resolve(orders)
  })
})

const getOrdersByAddress = (db, customerAddress) => new Promise((resolve, reject) => {
  db.collection(orderCollection).find({customerAddress}).toArray((err, orders) => {
    if (err) {
      return reject(err)
    }
    return resolve(orders)
  })
})

const removeOrderById = (db, orderId) => new Promise((resolve, reject) => {
  db.collection(orderCollection).remove({
    orderId
  }, ((err, orders) => {
    if (err) {
      return reject(err)
    }
    return resolve(true)
  }))
})

const getOrdersCount = db => new Promise((resolve, reject) => {
  db.collection(orderCollection).aggregate([
    {
      $group: {
        _id: {
          orderedItem: '$orderedItem'
        },
        count: {
          '$sum': 1
        }
      }
    }, {
      $sort: {
        count: -1
      }
    }
  ]).toArray((err, orders) => {
    if (err) {
      return reject(err);
    }
    return resolve(orders);
  })
})

module.exports = {
  getOrdersByCompany,
  getOrdersByAddress,
  removeOrderById,
  getOrdersCount
}
