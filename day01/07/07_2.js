//(function (exports, require, module, __filename, __dirname) {
console.log('07_2.js');

var a=1;
function fn(){
  console.log(2);
}
//module 模块，指代当前所在模块
//使用module公开变量或者函数
//module.exports要导出的对象 
//module.exports={name:'阿然'}  
module.exports.name='阿然';
module.exports.mya=a;
module.exports.fn=fn;



//});