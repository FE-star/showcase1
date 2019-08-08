/**
 * solution1
 */
function addScriptTag(src) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javaScript');
    script.src = src;
    document.body.appendChild(script);
}

function callback(msg) {
    console.log(msg)
}

window.onload = function() {
    addScriptTag('http://x.localhost.com:7001/json?callback=callback');
}

/**
 * solution2
 */
// require(['http://x.localhost.com:7001/json?callback=define'], function(value) {
//     console.log(value);
// })