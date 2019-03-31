# 跨域方案

### 步骤

* npm install
* npm run dev
* 配置hosts

```
127.0.0.1 x.localhost.com
127.0.0.1 y.localhost.com
```

* 例子是下面这几个

    1. http://y.localhost.com:7001/public/1.html
    2. http://y.localhost.com:7001/public/2.html
    3. http://y.localhost.com:7001/public/3.html
    4. http://y.localhost.com:7001/public/4.html
    5. http://y.localhost.com:7001/public/5.html

### 参考

* [Koa](https://github.com/koajs/koa)
* [egg](https://eggjs.org/)
* [浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
* [XMLHTTPRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
* [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)

### 关于服务器转发的说明

还有一个解决方案也经常使用，就是在服务器添加一个转发，比如 nginx 配置 `proxy_pass`，这个方案其实是将原本跨域的请求变成了同域，相比其他方案来说比较简单，本质上来说这个已经不在跨域的范畴了，并且这种解决方案会占用主域的带宽
