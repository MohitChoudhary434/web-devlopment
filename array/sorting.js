//in array sort is using through a string so if we are using a 18 instead of 8 so its give a result like
//1,18,2,3,4
//so we are using a compare function(a,b) and return a-b
 
let arr=[1,2,3,7,8,6];
arr.sort();
console.log(arr);


//this is give a perfect sort of number
const arr1=[1,18,2,4,7,22];
console.log(arr1.sort (function(a,b)
{
    return a-b;
}));
    