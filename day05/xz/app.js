const express=require('express');
//引入用户路由器
const userRouter=require('./routes/user.js');
//创建web服务器
var app=express();
//监听端口
app.listen(8080);

//托管静态资源到public目录下
app.use( express.static('public') );

//使用路由器，挂载到/user下
// /user/reg
app.use('/user',userRouter);