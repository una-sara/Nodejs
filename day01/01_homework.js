//计算2019年6月21日距离国庆节还有?天?时?分?秒
var d1=new Date('2019/6/21');
var d2=new Date('2019/10/1 5:30:45');
//计算两个日期时间相差的毫秒数
var d=d2-d1;
//单位转为秒
d=Math.floor(d/1000);
//计算相差的天
var day=Math.floor(d/(24*60*60));
//去除天数，计算相差的小时
var hours=d%(24*60*60);
//计算相差的小时
hours=Math.floor(hours/(60*60));
//去除小时，计算相差的分钟
var minutes=d%(60*60);
//计算相差的分钟
minutes=Math.floor(minutes/60);
//相差的秒钟
var seconds=d%60;
console.log(seconds);






