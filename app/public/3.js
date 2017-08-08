var iframe = document.createElement('iframe')
iframe.src = 'http://x.stuq.com:7001/public/hash.html'
document.body.appendChild(iframe)

window.onhashchange = function () {
  console.log(location.hash)
}