/*Router文件说明
 *router.js用来处理不同URL的请求
 *本文件中只有对于异常URL的处理方式，而对于正常业务的URL处理方式则在responseHandler.js中。
 */
function route(handle, pathname, response, postData) {
	console.log("About to route a request for " + pathname);
	if(typeof handle[pathname] === 'function') {	//如果URL的pathname为正常业务请求，则调用相关函数
		handle[pathname](response, postData);
	}else {						//对于异常URL的处理方式
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not Found");
		response.end();
	}
}

exports.route = route;
