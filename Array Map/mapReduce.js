//its having a call back function called reducer and in this we have a 4 parameter (Accumulator,current values,index,array) and it gives a single output values.z

var num=[4,16,25,9,29];
console.log(num.reduce((sum,num1) => sum+=num1));

//initial value

var num=[1,2,3,4];
console.log(num.reduce((sum,num1)=>sum+=num1,100));