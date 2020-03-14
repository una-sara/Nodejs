//计算面积
function getArea(r){
  return Math.PI * Math.pow(r,2);
}
//计算周长
function getLength(r){
  return 2 * Math.PI * r;
}
//导出两个函数
//module.exports.getArea=getArea;
//module.exports.getLength=getLength;
//直接导出函数
//module.exports.fn=function(a,b){
//  return a+b;
//}
//直接导出一个对象
//exports和module.exports就不再指向同一个对象
module.exports={
  ename:'tom',
  say:function(){
  
  }
}
//exports指代module.exports
//exports.a=1;
//
//console.log( module.exports === exports );



