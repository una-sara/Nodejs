//引入查询字符串模块
const querystring=require('querystring');
/*
//查询字符串
var str='keyword=手机&enc=utf8';
//把查询字符串解析为对象
var obj=querystring.parse(str);
console.log(obj);
//把对象格式化为查询字符串
var str2=querystring.stringify(obj);
console.log(str2);
*/
var str='lid=5&pname=apple';
//解析为对象
var obj=querystring.parse(str);

console.log(obj.lid,obj.pname);

