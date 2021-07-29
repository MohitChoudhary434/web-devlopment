//Its filter a values from an array 
//Q.1 i want a odd elements of an array

var num=[23,1,8,113];
console.log(num.filter(num1=>num1%2!==0));


//<----- 2 nd way of writing---->
var num=[23,1,8,113,115];
console.log(num.filter(num1=>{
    return num1%2 !==0;
}));