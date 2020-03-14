//1.块级作用域
//let b=2;
//console.log(b);
//var a=1;
/*
{
  //大括号之间就是块级作用域
  let num=1;//局部变量
}
console.log(num);

//计算1~100之间所有的整数的和，使用let声明变量
var sum=0;
for(let i=1;i<=100;i++){
  sum+=i;
}
console.log(sum);

//2.函数参数增强
//参数默认值
function add(a,b,c=0){
  console.log(a+b+c);
}
add(87,92);

//3.箭头函数(回调函数)
var arr=[23,9,45,78,6];
//console.log( arr.sort((a,b)=>{
//  return a-b;
//}) );
console.log( arr.sort((a,b)=>a-b) );


//4.模板字符串
//打印 '今天是2019年6月20日 星期四'
var year=2019;
var month=5;
var date=20;
var day='星期四';
var hour=11;
console.log(`
  var今天是${year}年${month+1}月${date}日 
  ${day} ${hour>12?'下午':'上午'}
`);
*/
//练习：创建一个人对象，包含人的姓名，性别(0/1)，年龄；在模板字符串之间打印 个人的介绍。
var person={
  ename:'小然',
  sex:1,
  age:78
};
console.log(`
  我的姓名叫${person.ename},性别${person.sex===1?'男':'女'},今年${person.age}岁了
`);







