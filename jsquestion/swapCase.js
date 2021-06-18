//Q.6 write a js function that takes a string which has lower and upper case 
//letters as a parameter and converts uppercase letters to a lower case and lower case letter to uppercase
var swap = (string) => {
var result = "";
for (let i=0; i < string.length; i++)
{
    if(string[i]===string[i].toUpperCase())
    {
        result +=string[i].toLowerCase();
    }
    else
    {
        result +=string[i].toUpperCase();
    }
    
} return result;
};
console.log(swap("AaBbCcDd"));