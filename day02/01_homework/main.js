//引入circle.js模块
//如果引入模块后缀名为js，可以省略
var circle=require('./circle.js');
//console.log(circle);
//console.log(circle.fn(2,3));
//console.log( circle.getArea(4).toFixed(2) );
//console.log( circle.getLength(4).toFixed(2) );
//当前模块的绝对目录和模块名称
console.log(__filename);
//当前模块的绝对目录
console.log(__dirname);