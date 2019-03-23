/**
 * 方法1
 */
window.xxx = function (value) {
  console.log(value)
}

var script = document.createElement('script')
script.src = 'http://x.localhost.com:7001/json?callback=xxx'
document.body.appendChild(script)

/**
 * 方法2
 */
// require(['http://x.localhost.com:7001/json?callback=define'], function (value) {
//   console.log(value)
// })