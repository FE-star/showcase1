const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
  switch (xhr.readyState) {
    case 0:
      // UNSENT (未打开)
      debugger
      break
    case 1:
      // OPENED  (未发送)
      debugger
      break
    case 2:
      // HEADERS_RECEIVED (已获取响应头)
      debugger
      break
    case 3:
      // LOADING (正在下载响应体)
      debugger
      break
    case 4:
      // DONE (请求完成)
      if (xhr.status === 200) {
        console.log(xhr.responseType)
        console.log(xhr.responseText)
        console.log(xhr.response)
      }
      break
  }
}
xhr.open('GET', 'http://y.stuq.com:7001/json', true)
xhr.send(null)