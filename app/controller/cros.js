module.exports = app => {
  class CrosController extends app.Controller {
    * index(req) {
      // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS
      this.ctx.set('Access-Control-Allow-Origin', '*')
      // this.ctx.set('Access-Control-Allow-Origin', 'http://x.localhost.com')
      // 如果我们要 http://*.qq.com 都支持跨域怎么办？
      this.ctx.body = { msg: 'hello world' }
    }
  }
  return CrosController
}
