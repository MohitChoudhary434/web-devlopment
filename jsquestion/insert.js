var insert=(string,word,index)=>
{
    return string.substring(string,index) + word + ' '+ string.substring(index);
};
console.log(insert("We are doing some Exercises.","javascript",18));