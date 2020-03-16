//引入http模块
const http=require('http');
//向web服务器发请求
//参数1: 请求的URL
//参数2: 获取响应
http.get('http://www.weather.com.cn/data/sk/101010100.html',function(res){
  //res:响应的对象
  //响应的状态码
  console.log( res.statusCode );
  //获取响应的内容
  //事件：监听是否有数据流响应
  res.on('data',function(chunk){
    console.log(chunk.toString());
  })
});
