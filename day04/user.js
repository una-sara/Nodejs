//用户路由器
//用户下的所有路由都放在这个里边
//路由器是express下的一个功能
const express=require('express');
//创建路由器对象
var router=express.Router();
//往路由器中添加路由
//get  /list
router.get('/list',function(req,res){
  res.send('这是用户列表');
});

//路由器最终要交给web服务器使用，导出路由器对象
module.exports=router;




