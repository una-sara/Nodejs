const express=require('express');
var app=express();
app.listen(8080);

//验证是否为空
//参数1：要拦截的url(给谁用)
//参数2: 回调函数，处理请求
app.use('/reg',function(req,res,next){
  console.log('验证了是否为空');
  //如果为空，响应一句话
  //res.send('用户名不能为空');
  //执行下一个中间件或者路由
  next();
});
//练习：创建中间件，验证用户名是否可用
app.use('/reg',function(req,res,next){
  console.log('验证了用户名是否为空');
  next();
});


//注册路由  get  /reg
app.get('/reg',function(req,res){
  res.send('注册成功');
});



