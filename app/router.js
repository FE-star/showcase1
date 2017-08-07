module.exports = app => {
  app.get('/json', app.jsonp({ callback: 'callback' }), app.controller.jsonp.index)
  app.get('/cros', app.controller.cros.index)
}