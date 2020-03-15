//引入express模块
//引入不以路径开头的目录模块
const express=require('express');
//创建web服务器
var app=express();
//监听端口8080
app.listen(8080);
//使用路由来接收请求并作出响应
//一个路由只能处理一个请求
//请求: 请求url，请求的方法
//请求方法：get   请求url:  /login
app.get('/login',function(req,res){
  //回调函数：用于作出响应
  //req: 请求的对象
  //res: 响应的对象
  res.send('这是登陆的页面');
});
//练习：创建路由，请求方法:get，请求url: /reg,响应多行内容
app.get('/reg',function(req,res){
  //res.send('这是注册的页面');
  res.send(`
	  请注册<br>
	  这是注册的页面 
  `);
});
//练习：创建路由，请求的方法:get 请求的url: /study ，响应内容并发送
app.get('/study',function(req,res){
  //res.send('tmooc首页');
  //响应一个文件，必须绝对路径
  res.sendFile(__dirname+'/tmooc.html');
  //console.log(__dirname);
});
//请求方法:get  请求url:/index
app.get('/index',function(req,res){
  //跳转到 http://www.codeboy.com
  res.redirect('http://www.codeboy.com');
});
//练习：创建路由，请求url: /，请求方法:get，自动跳转到  /study
app.get('/',function(req,res){
  //跳转
  res.redirect('/study');
});
//请求方法:get  请求的url: /detail
//响应内容并发送
app.get('/detail',function(req,res){
  //获取请求的方法，url，头信息
  //req: 请求的对象
  //console.log(req.method,req.url);
  //console.log(req.headers);
  //获取查询字符串的数据，返回对象
  console.log( req.query );
  
  res.send('这是商品的详情');
});
//路由：请求方法：get  请求的url:/shopping，响应内容并发送
app.get('/shopping/:price',function(req,res){
  //获取路由传递的数据
  console.log( req.params );
  res.send('这是购物车');
});
//
app.get('/admin/:uname/:upwd',function(req,res){
  console.log(req.params);
  res.send('欢迎用户：'+req.params.uname);
});








