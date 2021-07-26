// its using for iteration 
//going to a individual element 
//its take a 3 parameter (element,index,array)
//change a original array using index property.
var arr=[1,23,8,6,113];
var result=[];
arr.forEach(arr1=>
    {
        result.push(arr1*2);
    });
    console.log(result);//new array of multiply by 2
    console.log(arr);//original array

//<---change a original array by using index --->
 var arr=[1,23,8,6,113,5];
arr.forEach((arr1, index)=>{
    arr[index]=arr1*2;

});
console.log(arr);