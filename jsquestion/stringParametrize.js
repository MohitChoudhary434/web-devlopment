//Q.4 write a java script function to parametrize a String ?
//file name suggestion :stringParametrize.js
//test data:
//console.log(parameter(Robin Singh from USA) );//robin-singh-from-usa

const parameter=(string)=>{
    return string.toLowerCase().replace(/ /gi, '-');
}
 console.log(parameter("Robin Singh from India"));

// var parameter=(string)=>{
//     return string.toLowerCase().replaceAll(' ','-');
// };
// console.log(parameter("Robin Singh from USa"));