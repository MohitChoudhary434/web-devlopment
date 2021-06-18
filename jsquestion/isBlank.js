//Q.1 write a js function to check whether a string blank or not
const isBlank = (str) =>{
// if(str.length === 0)
// return true;
// else
// return false;
//return str.length === 0 ? true: false;
return !str.length?true:false;
//return !str.length;
}
console.log(isBlank(""));
console.log(isBlank("abc"));