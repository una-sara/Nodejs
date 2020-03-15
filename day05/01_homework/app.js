const express=require('express');
//引入路由器
const productRouter=require('./product.js');
var app=express();//创建web服务器
app.listen(8080);

//使用路由器
// 路由访问形式 /product/list
//路由级中间件使用
app.use('/product',productRouter);