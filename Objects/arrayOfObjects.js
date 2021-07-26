//year wise sorting

var cars = [
    {type:"volvo",year : 2016},
    {type:"bmw",year:2010},
    {type:"audi",year:2001}
];
console.log(cars.sort((a,b)=>a.year-b.year));