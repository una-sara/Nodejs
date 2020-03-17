const express=require('express');
//引入mysql模块
const mysql=require('mysql');
//创建web服务器
var app=express();
app.listen(8080);

//托管静态资源到public目录
app.use( express.static('public') );
//连接mysql数据库
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:20
});

//根据表单的提交创建对应的路由
app.get('/add',function(req,res){
  //获取get数据
  var obj=req.query;
  console.log(obj);
  //执行SQL语句，将数据插入到数据库
  pool.query('INSERT INTO dept SET ?',[obj],function(err,result){
    if(err) throw err;
	console.log(result);
	//如果插入成功，响应注册成功
	if(result.affectedRows>0){
	  res.send('注册成功');
	}
  })
  
});

