'use strict';
/* Hoisting */

/* Execution Context
    -variable environment(let's talk about this) <==================c
    -scope chain
    -this keyword
*/

//Hoisting: variables lifted to the top of their scope... kind of!

/* Remembering the phases: 
    1. Allocation phase or creation phase ====>>> engine goes from top to bottom scanning for variable declarations.
        Creating a new property for each variable. (in the -variable environment object-)
    2. Execution phase (execution context)
*/

/* 
                            Hoisted                 Initial Value                                  Scope
    --------var variables:  Yes                     undefined                                      Function
    --------let variables:  No      //but yes ====> uninitialized                                  Block        
    ------const variables:  No      //but yes ====> uninitialized                                  Block
    function declarations:  Yes                     function(){} <==> (function definition)        Block(strict mode) : function                      
    -function expressions:  -------------------------Depending if using var or let or const----------------- 
    ------arrow functions:  -------------------------Depending if using var or let or const----------------- 
*/

// lets try to declare some variables with var, let and const;


/* Variables Hoisting */
console.log(firstName); // undefined
// console.log(occupation); // Uncaught ReferenceError: Cannot access 'occupation' before initialization
// console.log(age); // Uncaught ReferenceError: Cannot access 'age' before initialization

var firstName = 'Mike';
let occupation = 'Software Engineer';
const age = 30;


/* Functions Hoisting */

console.log(funcDecl(5, 6)); // 11
// console.log(funcExp(5,6)); /* Uncaught ReferenceError: Cannot access 'funcExp' before initialization */
// console.log(arrowFunc(5,6)); /* Uncaught ReferenceError: Cannot access 'arrowFunc' before initialization */
// console.log(arrowFuncVar(5,6)); /* Uncaught TypeError: arrowFuncVar is not a function */
console.log(arrowFuncVar); /* undefined */


function funcDecl(x, y) { /* Only one that works before declaring it */
    return x + y;
}

const funcExp = function (x, y) {
    return x + y;
}

const arrowFunc = (x, y) => x + y;

var arrowFuncVar = (x, y) => x + y;

/* Hoisting pitfulls */

console.log(numItems); // undefined ===> falsy value
console.log(!numItems); // true

if (!numItems) deleteAll(); /* Delete All */

var numItems = 20;

function deleteAll() {
    console.log('Delete All');
}
/* Declare your variables first. Always declare your functions first before using them!*/
/*  IN my opinion DO NOT USE 'var' to declare variables*/


/* Cool extra feature */

// check window on the console

var x = 1; //global memory??
let y = 10;
const z = 100;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);