// change everything below to the newer Javascript!

// let + const
let a = 'test';
let b = true;
let c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let { firstName, lastName, age, eyeColor } = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = { a, b, c };

// Template strings
let firstName = "John";
let city = "Miskolc";
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;
console.log(message);

// default arguments
// default age to 10;
function isValidAge(age=10) {
    return age;
}

// Symbol
// Create a symbol: "This is my first Symbol"
var mySim = Symbol('This is my first Symbol');

// Arrow functions
const whereAmI = (username, location) => (username && location)? "I am not lost" : "I am totally lost!";
