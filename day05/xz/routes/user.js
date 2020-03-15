const express=require('express');
//创建路由器对象
var router=express.Router();
//添加路由
//1.注册路由
router.post('/reg',function(req,res){
  res.send('注册成功');
});

//导出路由器对象
module.exports=router;