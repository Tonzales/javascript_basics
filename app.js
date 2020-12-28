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

//Array of objects
const todos = [
    {
        id: 1,
        text: "Take out the trash",
        isCompleted: false
    },
    {
        id: 2,
        text: "Go shopping",
        isCompleted: true
    }
];

const todoJSON = JSON.stringify(todos); //Converts the array of object to json
console.log(todoJSON);

//Loops
//For of loop
for(let todo of todos){
    //console.log(todo.text);
}
//High order array methods
// forEach, map, filter
todos.forEach(function(todoItem){
   // console.log(todoItem.text);
});
//Creates a new array with only todo's texts
let newHelper = todos.map(function(todo){
    return todo.text;
});
console.log(newHelper);
let newHelper2 = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(newHelper2);