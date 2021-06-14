var str="Apple, Banana, Kiwi";
var res=str.slice(7,13);
console.log(res);

var str1="Apple, Banana, Kiwi";
var res=str1.slice(7);//Take the entire string after some position till the end
console.log(res);

var str3="Apple, Banana, Kiwi";
var res=str3.slice(-12,-6);//Its take a negative indexes also  but substring() is not taking
console.log(res);//Banana
