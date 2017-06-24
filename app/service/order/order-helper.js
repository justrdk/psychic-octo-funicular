const Promise = require('bluebird')
const orderCollection = 'orders'

const getOrdersByCompany = (db, company) => (
  new Promise((resolve, reject) => {
    db.collection(orderCollection).find({company})
      .toArray((err, orders) => {
        if (err) {
          return reject(err)
        }
        return resolve(orders)
      })
  })
)

const getOrdersByAddress = (db, address) => (
  new Promise((resolve, reject) => {
    db.collection(orderCollection).find({address})
      .toArray((err, orders) => {
        if (err) {
          return reject(err)
        }
        return resolve(orders)
      })
  })
)

const removeOrderById = (db, orderId) => (
  new Promise((resolve, reject) => {
    db.collection(orderCollection).remove({orderId})
      .toArray((err, orders) => {
        if (err) {
          return reject(err)
        }
        return resolve(true)
      })
  })
)

module.exports= {
  getOrdersByCompany,
  getOrdersByAddress,
  removeOrderById
}
