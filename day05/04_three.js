//练习: 创建web服务器，托管静态资源到public目录下，浏览器向服务器请求login.html
const express=require('express');
//const querystring=require('querystring');
//引入body-parser中间件
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);

//托管静态资源到public目录
app.use( express.static('public') );
//使用body-parser中间件
//将post请求的数据解析为对象
app.use( bodyParser.urlencoded({
  extended:false  //不使用第三方的qs模块，而是使用核心模块querystring来解析查询字符串为对象
}) );

//根据表单的请求，创建对应的路由
app.post('/mylogin',function(req,res){
  //获取post请求的数据
  /*
  req.on('data',function(mydata){
    //console.log(mydata.toString());
	var obj=querystring.parse( mydata.toString() );
	console.log(obj);
  });
  */
  console.log(req.body);
  res.send('登陆成功');
});


