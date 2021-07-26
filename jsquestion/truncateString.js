//Q.3 write a java script function to extract a specified number
//of character to string

const truncateString=(str,length)=>{
    return str.slice(0,length);
}
console.log(truncateString("Robin Singh",4));