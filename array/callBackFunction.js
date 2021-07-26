var num=[23,1,8,113];
console.log(num.sort(function(a,b)
{
    return a-b;

}));
// where function passed as the parameter this is called as callback function
var num1=[23,1,8,1123];
console.log(num1.sort(function(a,b){
console.log('a=${a},b=${b}');
return a-b;
}));

var num2=[2,5,23,7,8];
console.log(num2.sort((a,b)=>{
    return a-b;
}));