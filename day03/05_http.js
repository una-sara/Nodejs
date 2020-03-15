//引入http模块
const http=require('http');
//创建web服务器
var app=http.createServer();
//设置监听的端口
app.listen(8080);
//http://127.0.0.1:8080
//http://localhost:8080
//接收请求，根据请求作出响应
//事件：一旦有请求，自动触发事件
//回调函数: 服务器作出响应
app.on('request',function(req,res){
  //req: 请求的对象，获取所有请求
  //请求的URL，请求的方法
  //console.log(req.url,req.method);
  //请求的头信息
  //console.log(req.headers);
  //res: 响应的对象，作出具体响应
  //设置响应的内容
  //res.write('this is homepage');
  //设置响应的头信息和状态码
  res.writeHead(302,{
    Location:'http://www.tmooc.cn'//跳转
  });
  //结束并发送响应内容到浏览器
  res.end();
});










