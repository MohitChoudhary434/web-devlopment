//iterate a object through foe in loop
// var person={
//     firstName:"Mohit",
//    lastName:"Choudhary",
//    age:24,

// };
// for (let key in person)
// console.log([key]);
//console.log(person[key]);

// Mohit
// Choudhary
// 24

var person={
    firstName:"Mohit",
   lastName:"Choudhary",
   age:24,

};
for (let key in person){
console.log(key,person[key]);
//console.log(person[key]);
}

//  Add a  new  properties in js 

var person1={
    firstName:"Mohit",
    lastName:"choudhary",

};
console.log(person1);
person1.age=23;
console.log(person1);


//Delete some properties
// var person1={
//     firstName:"Mohit",
//     lastName:"choudhary",
//     age:23,
// };
// console.log(person1);
// delete person1.age;
// console.log(person1);

//to get all the keys we are using a object keyword
// var person1={
//         firstName:"Mohit",
//         lastName:"choudhary",
//         age:23,
//     };
//     console.log(Object.keys(person1));
//     console.log(Object.values(person1));
//     console.log(Object.entries(person1));


    //Json object in javascript its converted a 1 object into a string

    // var person1={
    //     firstName:"Mohit",
    //     lastName:"choudhary",
    //     age:23,
    // };
    // console.log(JSON.stringify(person1));


    //Again convert into a object 

    var person1={
        firstName:"Mohit",
        lastName:"choudhary",
        age:23,
    };
    console.log(JSON.parse
        (JSON.stringify(person1)));