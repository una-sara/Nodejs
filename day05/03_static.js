const express=require('express');
var app=express();
app.listen(8080);

//把所有的静态资源(html、css、js、图片等文件)托管到 public 目录下
//当浏览器请求静态资源，会自动到public目录下寻找，不需要再创建单独的路由响应文件
app.use( express.static('public') );
app.use( express.static('files') );



