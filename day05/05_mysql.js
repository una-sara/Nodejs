//引入mysql模块
const mysql=require('mysql');
//创建连接对象
var connection=mysql.createConnection({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu'  //连接后使用的数据库
});
//建立连接
connection.connect();
//执行SQL语句
/*
connection.query('DELETE FROM emp WHERE eid=3',function(err,result){
  //err 可能产生的错误
  //result  SQL语句的结果
  if(err) throw err;
  console.log(result);
});

//修改编号为10的数据，性别改为1，工资改为5000
connection.query('UPDATE emp SET sex=1,salary=5000 WHERE eid=10',function(err,result){
   if(err) throw err;
   console.log(result);
});

//查询员工表所有的数据
connection.query('SELECT * FROM emp',function(err,result){
  if(err) throw err;
  console.log(result);
});

//往员工表中插入数据 对象
connection.query(`INSERT INTO emp VALUES(NULL,'sty',1,'1999-7-1',8000,20)`,function(err,result){
  if(err) throw err;
  console.log(result);
});

//使用占位符，过滤传入的值
connection.query('INSERT INTO emp VALUES(?,?,?,?,?,?)',[null,'abcd',1,'1997-9-2',8000,20],function(err,result){
  if(err) throw err;
  console.log(result);
})
*/
//直接将对象插入数据库
var emp={
  ename:'ccc',
  birthday:'1995-8-3',
  sex:0,
  salary:9000
}
connection.query('INSERT INTO emp SET ?',[emp],function(err,result){
  if(err) throw err;
  console.log(result);
});
//关闭连接
connection.end();

