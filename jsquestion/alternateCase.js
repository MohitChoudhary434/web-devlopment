//Q.7 write a js function to lower and uppercase in alternative way.

const alter =(string)=>{
   let result="";
for(let i=0;i<string.length;i++)
{
    if(i%2===0)
    {
        result +=string[i].toUpperCase();
    }
    else
    {
        result +=string[i].toLowerCase();
    }
}
return result;

};
console.log(alter("samsung"));