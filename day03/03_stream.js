const fs=require('fs');
//文件流
/*
//1.1创建可读流
var readStream=fs.createReadStream('02_fs.js');
//1.2设置编码为utf8
readStream.setEncoding('utf8');
//1.3获取数据流
//事件：监听是否有数据流
//使用回调函数来获取数据流
readStream.on('data',function(chunk){
  //chunk每次读取的数据
  console.log(chunk);
});
//1.4事件：监听是否读取结束
readStream.on('end',function(){
  console.log('读取结束');
});
*/




//2.使用可读流和可写流，拷贝文件
//2.1创建可读流
var readStream=fs.createReadStream('webstorm2017.rar');
//2.2创建可写流
var writeStream=fs.createWriteStream('1.rar');
//2.3把读取的流通过管道放入到写入流
readStream.pipe(writeStream);







