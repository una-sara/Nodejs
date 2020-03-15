//引入http模块
const http=require('http');
//引入fs模块
const fs=require('fs');
//引入zlib模块（用于压缩）
const zlib=require('zlib');
//创建web服务器
var app=http.createServer();
//监听端口8080
app.listen(8080);
//监听浏览器的请求
app.on('request',function(req,res){
  //根据请求来作出响应
  //console.log(req.url);
  //如果/login 响应
  if(req.url==='/login'){
    res.write('this is login page');
	res.end();
  }else if(req.url==='/reg'){//如果 /reg
    res.write('this is reg page');
	res.end();
  }else if(req.url==='/study'){//如果 /study
    //跳转
	res.writeHead(302,{
	  Location:'http://www.tmooc.cn'
	});
	res.end();
  }else if(req.url==='/index'){
    //如果请求的url是/index，响应文件tmooc.html到浏览器
	//设置响应头信息，告诉浏览器响应的内容按照网页去解析
	res.writeHead(200,{
	  'Content-Type':'text/html',
	  'Content-Encoding':'gzip'  //设置压缩类型
	});
	/*
    //1.1同步读取tmooc.html文件
    var data=fs.readFileSync('tmooc.html');
	//1.2读取的内容作为响应内容
	res.write( data.toString() );
	//1.3结束并发送
	res.end();
	*/
	//使用压缩
	//2.1创建gzip压缩
	var gzip=zlib.createGzip();
	//2.2创建可读流读取文件tmooc.html
	//通过管道把可读流放入到压缩中
	//把压缩后的内容响应到浏览器
	fs.createReadStream('tmooc.html').pipe(gzip).pipe(res);
  }
});



