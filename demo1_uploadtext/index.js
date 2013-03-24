var server = require("./server");		//加载server模块
var router = require("./router");		//加载router模块
var requestHandlers = require("./requestHandlers"); //加载requestHandler模块

var handle = {}					//对不同URL请求的处理
handle["/"] = requestHandlers.start;		
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);		//服务器启动参数
