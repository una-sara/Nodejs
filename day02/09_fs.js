//引入fs模块
const fs=require('fs');
//查看文件的状态
//参数1: 路径
//参数2: 回调函数,获取结果
fs.stat('08_global.js',function(err,stats){
  //err: 可能产生的错误
  if(err) throw err;
  //stats: 具体的结果
  console.log(stats);
});