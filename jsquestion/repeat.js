//Q.8 write a js function to concatenate a given string n times(default is 1)
const repeatString=(str,len)=>
{
let result=str;
if(len && len>1)
{
    for(let i=1;i<len;i++)
    {
        result +=str;
    }
}
return result;

};
console.log(repeatString("Ha! ",5));
