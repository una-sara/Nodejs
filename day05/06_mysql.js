//使用连接池连接
const mysql=require('mysql');
//创建连接池对象
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:20 //设置连接池的大小
});
//执行SQL语句
/*
pool.query('SELECT * FROM emp',function(err,result){
  if(err) throw err;
  console.log(result);
});
*/
//执行SQL语句，删除员工表编号为5的数据
pool.query('DELETE FROM emp WHERE eid=?',[5],function(err,result){
  if(err) throw err;
  console.log(result);
});



