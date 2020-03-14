var a=1;
console.log(global.a);
function fn(){
  return 2;
}
console.log( global.fn() );