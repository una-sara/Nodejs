const fs=require('fs');
//1.查看文件的状态
//通过回调函数来获取结果
/*
fs.stat('01_homework.js',function(err,stats){
  //err 可能产生的错误信息
  if(err) throw err;
  //stats具体的文件状态信息
  console.log(stats);
});

//查看文件的状态
//通过返回值获取结果
var rs=fs.statSync('01_homework.js');
console.log(rs);

//2.创建目录
fs.mkdir('mydir',function(err){
  if(err) throw err;
});

//同步方法创建mydir2
fs.mkdirSync('mydir2');
//3.移除目录
fs.rmdir('mydir',function(err){
  if(err) throw err;
});

fs.rmdirSync('mydir2');

//4.读取目录
fs.readdir('mydir',function(err,result){
  if(err) throw err;
  //result 读取的文件列表
  console.log(result);
});

var res=fs.readdirSync('mydir');
console.log(res);

//5.创建文件/写入文件
//清空写入
fs.writeFile('1.txt','1',function(err){
  if(err) throw err;
  console.log('文件写入成功');
});

//6.追加写入
fs.appendFile('2.html','hello\n',function(err){
  if(err) throw err;
  console.log('写入成功');
});

//练习：创建数组，每个元素是一个课程名称，遍历数组，分别获取元素，将数据使用同步方法写入到文件data.txt
var arr=['html','css','js','nodejs','mysql'];
for(var i=0;i<arr.length;i++){
  //数组元素 arr[i]
  //使用同步追加写入
  fs.appendFileSync('data.txt',arr[i]+'\n');
}

//7.读取文件
fs.readFile('data.txt',function(err,data){
  if(err) throw err;
  //data：读取的数据，格式为buffer 
  console.log( data.toString() );
});

//练习：使用同步方法读取2.html
var data=fs.readFileSync('2.html');
console.log( data.toString() );

//8.删除文件
fs.unlink('1.txt',function(err){
  if(err) throw err;
  console.log('文件删除成功');
});

//使用同步删除文件  unlinkSync
fs.unlinkSync('2.html');

//9.判断文件是否存在
var res=fs.existsSync('mydir');
console.log(res);

console.log('end');
*/
//练习：判断data.txt是否存在，如果存在，则删除
if( fs.existsSync('data.txt') ){
  //如果存在，删除
  fs.unlinkSync('data.txt');
}













