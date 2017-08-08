module.exports = app => {
  class MsgController extends app.Controller {
    * index(req) {
      this.ctx.body = { msg: 'hello world' }
    }
  }
  return MsgController
}