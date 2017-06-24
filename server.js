const Koa = require('koa');
const app = new Koa();
const KoaRouter = require('koa-router')
const router = new KoaRouter()
const co = require('co');
const orderService = require('./app/service/order/order')


router.get('/ordersByCompany/:company', co.wrap(function *(ctx, next) {
  const { company } = ctx.params
  const orders = yield orderService.getOrdersByCompany(company)
  ctx.body = orders
  yield next()
}))

router.get('/ordersByAddress/:address', co.wrap(function *(ctx, next) {
  const { address } = ctx.params
  const orders = yield orderService.getOrdersByAddress(address)
  ctx.body = orders
  yield next()
}))

router.delete('/orders/:orderId', co.wrap(function *(ctx, next) {
  const { orderId } = ctx.params
  const orders = yield orderService.removeOrdersByOrderId(orderId)
  ctx.body = orders
  yield next()
}))

router.get('/ordersCount', co.wrap(function *(ctx, next) {
  const orders = yield orderService.getOrdersCount()
  ctx.body = orders
  yield next()
}))

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000, () => {
    console.log('running server at port: 3000')
  })
