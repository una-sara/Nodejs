//引入URL模块 
const url=require('url');
//引入查询字符串模块
const querystring=require('querystring');
var str='https://www.tmooc.cn:80/course.html?cid=17&cname=web';
//解析url为对象，获取到查询字符串
var obj1=url.parse(str);
//console.log(obj1);
var str2=obj1.query;//查询字符串
//console.log(str2);
//将查询字符串解析为对象
var obj2=querystring.parse(str2);
console.log(obj2.cid,obj2.cname);




