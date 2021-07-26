//this keyword in methods it's refers a owner's Object
//arrow function does not have own this so it's refers to a window object or a parent object
//(parent of everyone is a global objet or a window object)
// firstName="abc"; this things work in a browser console and gives a output=abc jat
// lastName="jat";

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : ()=> {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName());