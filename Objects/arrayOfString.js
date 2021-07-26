//Alphabetically sorting of an string 


var cars = [
    {type:"volvo",year : 2016},
    {type:"bmw",year:2010},
    {type:"audi",year:2001}
];
console.log(cars.sort((a,b)=>{
    const x=a.type.toLowerCase();
    const y=b.type.toLowerCase();
    if(x<y)
    {
        return -1;

    }
    if(x>y)
    {
        return 1;
    }
    return 0;
}));