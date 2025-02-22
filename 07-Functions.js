function sayHi() {
    console.log("Hello World !")
}
sayHi()

function table(n) {
    let i, multi=0;
    console.log("Table of number: ")
    for(i=1; i<=10; i++) {
        multi = n*i;
        console.log(multi);
    } 
    
}
table(2);

/*function expression -> A function expression defines a function as part of an expression, typically by assigning it to a variable. It's not hoisted, so it must be defined before it's called. */
let expression = function add(name) { 
    return `Hello, ${name}`;
}
console.log("Function expression example: ", expression("Jane doe"));

/*Introduced in ES6, arrow functions provide a concise syntax for writing functions, especially for short, anonymous functions.*/
var arrowFunction = (name) => {
    return `Hello, ${name}`;
}
console.log("Arrow function example: ", arrowFunction("Jane Doe"));

/*Callback Functions -> JavaScript functions can be passed as arguments to other functions, commonly known as callback functions. They're extensively used in asynchronous programming and event handling.*/
function processData(data) {
    console.log(`Processing data: ${data}`);
}
function fetchData(callbackFunction) {
    // Simulated asynchronous operation
    setTimeout(() => {
        const data = "Data fetched successfully";
        callbackFunction(data);
    }, 2000);
}
fetchData(processData); // Output: Processing data: Data fetched successfully

/*Returning Functions -> 
In JavaScript, functions can return other functions, enabling the creation of higher-order functions. */
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
console.log("Multiplier: ", multiplier(2));

/*Built-in Functions
JavaScript comes with several built-in functions, such as setTimeout, setInterval, and addEventListener, which take functions as arguments.*/
setTimeout(() => {
    console.log("Delayed function");
}, 1000);