// it change the original array.
//the splice() method can be used to add new items to an array
//splice(where new element add,how many element Remove, Insert an array)
//to add an array on particular index we are using splice
//1 add an element on particular index 
var arr=["bmw","audi","volvo"];
arr.splice(1,0,"hello");
console.log(arr);
console.log(arr.length);
//also to remove an array on particular index
var arr=["bmw","audi","volvo"];
arr.splice(1,2);
console.log(arr);

//concatenating of an array
//its create a new array not change an original array
var arr=["bmw","audi","volvo"];
var arr1=['x1','x2','q1','q2','xc60','xc90'];
var product=arr.concat(arr1);
console.log(product);