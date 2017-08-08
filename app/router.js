module.exports = app => {
  app.get('/json', app.jsonp({ callback: 'callback' }), app.controller.json.index)
  app.get('/cros', app.controller.cros.index)
}