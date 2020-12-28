"use strict";
//template string, new syntax to include the variables inside the string
let name = "Toni";
let age = 23;
let helper = `My name is ${name} and I am ${age}`;
console.log(helper);
let fruits = ["apples","oranges"];
fruits.push("bananas"); //Pushes to last
fruits.unshift("mangos"); //Pushes to first
fruits.pop(); //Takes away the last one
console.log(fruits);

const person = {
    firstName: "john",
    lastName: "doe",
    age: 23,
    address: {
        street: "sesam street",
        city: "Therestan"
    }
}

//Destructuring
const {firstName, lastName, address:{city}} = person; //Pulling information from object
console.log(firstName);
console.log(city);
