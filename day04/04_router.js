const express=require('express');
//引入路由器模块
const userRouter=require('./user.js');
//创建web服务器
var app=express();
//监听端口
app.listen(8080);

//路由
//使用路由器，把用户下的所有路由挂载到/user下
//挂载：在url的前边添加 /user
// /user/list   /user/delete
//参数1: 挂载的url
//参数2: 要挂载的路由器
app.use('/user',userRouter);



