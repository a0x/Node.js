/*server.js文件说明
 *将data和end事件的回调函数直接放在服务器中，在data事件回调中收集所有POST数据。
 *当接收到所有数据，触发end事件后，其回调函数调用请求路由，并将数据传递给它。
 *然后，请求路由再将该数据传给请求处理程序。
 */

var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;			// 从URL中提取出pathname
		console.log("Request for " + pathname + " received.");
		request.setEncoding("utf8");
		request.addListener("data", function (postDataChunk) {		//data的回调函数
			postData += postDataChunk;
			console.log("Received POST data chunk " + postDataChunk + ".");
		});
		request.addListener("end", function() {				//end的回调函数
			route(handle, pathname, response, postData);
		});
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;
