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
//Comparisons etc.
/*
 === datatype comparison also
 == doesnt test type
 && and in if-statement
 || or in if-statement
 */
//shorthand if statements, ternary operator:
const x = 11;
const color = x > 10 ? "red" : "blue";
//             if   then    else
// if x is greater than ten, then red, else blue

// Switch case
switch (color) {
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is something else");
        break;
}

// Functions 
let addNums = (num1, num2) => {
    return num1 + num2;
}
//One line arrow function
let addNums2 = (num1,num2) => num1+num2;
console.log(addNums2(1,2));

todos.forEach((todo)=> console.log(todo.text));

// OOP
//constructor function
function Person(firstName,lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //Date object, these have handiful methods!
    //Methods for object
    // this.getBirthYear = function(){ 
    //     return this.dob.getFullYear();
    // }
    this.getFullName= function(){
        return `${this.firstName} ${this.lastName}`;
    } 

}

//Instantiate object
let person1 = new Person("Toni","Hämäläinen",'1997-05-03');
console.log(person1.getFullName());

//Prototypes, you can hide the methods from object when you log it etc.
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
console.log(person1.getBirthYear());
console.log(person1);

//Class 
class Human {
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
let toni = new Human("Toni","Hamis","1990-5-3");
console.log(toni);


