module.exports = app => {
  class CrosController extends app.Controller {
    * index(req) {
      // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS
      // 如果我们要 http://*.localhost.com 都支持跨域怎么办？
      this.ctx.set('Access-Control-Allow-Origin', '*')
      // Credentials mode
      // this.ctx.set('Access-Control-Allow-Origin', 'http://y.localhost.com:7001')
      // this.ctx.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
      // this.ctx.set('Access-Control-Allow-Headers', 'X-Requested-With, User-Agent, Referer, Content-Type, Cache-Control');
      // this.ctx.set('Access-Control-Allow-Credentials', 'true');
      this.ctx.body = { msg: 'hello world' }
    }
  }
  return CrosController
}
