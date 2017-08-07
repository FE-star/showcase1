module.exports = app => {
  class CrosController extends app.Controller {
    * index(req) {
      this.ctx.set('Access-Control-Allow-Origin', '*')
      this.ctx.body = { msg: 'hello world' }
    }
  }
  return CrosController
}
