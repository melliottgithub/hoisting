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

// lets try to declare some variables with var, let and const;

var name = 'Mike';
let occupation = 'Software Engineer';
const age = 30;

