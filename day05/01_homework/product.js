const express=require('express');
//创建路由器对象
var router=express.Router();
//添加路由
router.get('/list',function(req,res){
  res.send('这是商品列表');
});
//导出路由器对象
module.exports=router;
