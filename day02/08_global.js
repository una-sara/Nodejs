//console.log( global.parseInt(3.14) );
//1.一次性定时器
/*
//开启
var timer=global.setTimeout( ()=>{
  console.log('嘣嘣嘣！');
},3000 );
//清除
global.clearTimeout(timer);

//2.周期性定时器
//开启
var timer=setInterval( function(){
  console.log('嘀嘀嘀!');
},2000 );
//清除
clearInterval(timer);
*/
//3.立即执行定时器 
//回调函数放入到事件队列中
var timer=setImmediate(function(){
  console.log(1);
});
//清除
//clearImmediate(timer);

//4.立即执行定时器
process.nextTick(function(){
  console.log(3);
});

console.log(2);


