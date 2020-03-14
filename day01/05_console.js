//console.log(1);
//console.info(2);
//console.warn(3);
//console.error(4);
//开始计时
console.time('for');
for(let i=1,sum=0;i<=1000000;i++){
  sum+=i;
}
//结束计时
console.timeEnd('for');

//while循环耗时
console.time('while');
let i=1;
let sum=0;
while(i<=1000000){
  sum+=i;
  i++;
}
console.timeEnd('while');

console.time('dowhile');
i=1;
sum=0;
do{
  sum+=i;
  i++;
}while(i<=1000000);
console.timeEnd('dowhile');



