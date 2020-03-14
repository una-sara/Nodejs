//引入url模块
const url=require('url');
//处理和解析URL
var str='http://www.tmooc.cn:80/detail.html?lid=5';
//把URL解析为对象
var obj=url.parse(str);
//console.log(obj);

var obj2={
  protocol:'https',
  hostname:'www.tmooc.cn',
  port:'8080',
  pathname:'detail.html',
  query:{
    lid:5,
	pname:'dell'
  }
}
//把对象格式化为URL
var str2=url.format(obj2);
console.log(str2);


