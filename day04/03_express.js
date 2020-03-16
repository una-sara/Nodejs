const express=require('express');
const querystring=require('querystring');
//创建web服务器
var app=express();
//监听端口
app.listen(8080);

//路由 请求方法:get 请求url:/login
app.get('/login',function(req,res){
  //响应文件
  res.sendFile(__dirname+'/login.html');
});
//根据提交按钮的请求，创建对应的路由
//post  /mylogin   响应'登陆成功'
app.post('/mylogin',function(req,res){
  //获取post请求数据
  //事件：
  req.on('data',function(mydata){
	//buffer数据->查询字符串
    //console.log(mydata.toString());
    //把查询字符串转为对象
	var str=mydata.toString();
	var obj=querystring.parse(str);
	console.log(obj);
  });

  res.send('登陆成功');
});

//练习：创建路由，请求方法: get，请求url: /reg，响应一个文件reg.html
app.get('/reg',function(req,res){
  //响应注册文件到浏览器 --17:16
  res.sendFile(__dirname+'/reg.html');
});
//根据表单的请求，来写对应的路由
// get  /myreg
app.get('/myreg',function(req,res){
  //get请求传递的数据是查询字符串
  console.log(req.query);
  res.send('注册成功，您的手机号码：'+req.query.phone);
});





