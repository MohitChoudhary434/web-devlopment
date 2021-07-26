//objects having a real life entity
//A car is an object ,a car has properties like weights,color,tyre and methods like start and stop  

const car={
    color:"red",
    price:5000,
    start:function()
    {
return "car is fully start"
    },
    stop:(a,b)=>//arrow function
    {
return a+b
    }
};
console.log(car.color);
console.log(car.price);
console.log(car);
console.log(car.start());
console.log(car.stop(2,5));
