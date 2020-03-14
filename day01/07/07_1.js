//(function (exports, require, module, __filename, __dirname) {
//引入07_2.js
// ./同一级目录
var obj=require('./07_2.js');
console.log(obj.name);
obj.fn();
//访问引入的模块中的变量
//console.log(a);

//});